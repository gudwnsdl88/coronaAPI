import axios from 'axios';
import cheerio from 'cheerio';
import { statusType } from '../types/myType';

//보건부에서 감염정보 가져오기
//확진환자, 격리해제 ,사망자 ,검사진행
export const getStatusCrawler = async () => {
  const statusData: statusType = {
    confirmation: 0,
    release: 0,
    dead: 0,
    inspection: 0,
    date: ''
  };

  try {
    const html = await axios.get(
      'http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=11&ncvContSeq=&contSeq=&board_id=&gubun='
    );

    const $ = cheerio.load(html.data);

    //날짜정보
    const dateData = $('p.s_descript')
      .first()
      .text();

    //감염정보
    const $statusData = $('table.num')
      .first()
      .children('tbody')
      .children('tr');

    /*
  0 확진환자
  1 확진환자 격리해제
  2 사망자
  3 검사진행
      */

    $statusData.each((index, item) => {
      const text: string = $(item)
        .find('td')
        .text();
      if (index === 0) {
        statusData.confirmation = parseInt(text.replace(',', ''));
      } else if (index === 1) {
        statusData.release = parseInt(text.replace(',', ''));
      } else if (index === 2) {
        statusData.dead = parseInt(text.replace(',', ''));
      } else {
        statusData.inspection = parseInt(text.replace(',', ''));
      }
    });

    statusData.date = dateData.split('(')[1].replace(')', '');

    return statusData;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

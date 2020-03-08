import { InsertStatusResponse } from '../../../types/graph';
import Status from '../../../entities/Status';
import { getStatusCrawler } from '../../../utils/webCrawler';
import { statusType } from '../../../types/myType';

const resolvers = {
  Mutation: {
    InsertStatus: async (): Promise<InsertStatusResponse> => {
      try {
        const statusData: statusType = await getStatusCrawler();

        const { confirmation, date, dead, inspection, release } = statusData;

        const existStatus = await Status.find({
          confirmation,
          date,
          dead,
          inspection,
          release
        });

        console.log(statusData);

        if (existStatus.length >= 1) {
          console.log(existStatus);
          return {
            ok: false,
            error: '정부 바이러스 정보가 아직 업데이트 되지 않았음'
          };
        }

        const newStatus = await Status.create({
          confirmation,
          date,
          dead,
          inspection,
          release
        }).save();

        console.log(newStatus);

        return {
          ok: true,
          error: ''
        };
      } catch (error) {
        console.log(error.message);
        return {
          ok: false,
          error: error.message
        };
      }
    }
  }
};

export default resolvers;

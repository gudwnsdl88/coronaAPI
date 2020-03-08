import Status from '../../../entities/Status';
import { getRepository } from 'typeorm';
import { RecentStatusResponse } from '../../../types/graph';

//id로 정렬해서 최근 2개만 가져온다
const resolvers = {
  Query: {
    RecentStatus: async (): Promise<RecentStatusResponse> => {
      try {
        const statusArray = await getRepository(Status)
          .createQueryBuilder('status')
          .orderBy('status.id', 'DESC')
          .take(2)
          .getMany();
        return {
          ok: true,
          error: '',
          result: statusArray
        };
      } catch (error) {
        console.log(error.message);
        return {
          ok: false,
          error: error.message,
          result: null
        };
      }
    }
  }
};

export default resolvers;

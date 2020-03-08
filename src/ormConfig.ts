import { ConnectionOptions } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();

const defaultConnectionOptions: ConnectionOptions = {
  type: 'postgres',
  database: process.env.DB_LOCAL_DBNAME,
  synchronize: true,
  entities: ['entities/**/*.*'],
  host: process.env.DB_LOCAL_ENDPOINT,
  port: 5432,
  username: process.env.DB_LOCAL_USERNAME,
  password: process.env.DB_LOCAL_PASSWORD
};

export default defaultConnectionOptions;

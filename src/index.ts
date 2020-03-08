import { Options } from 'graphql-yoga';
import { createConnection } from 'typeorm';
import ormConfig from './ormConfig';
import app from './app';

const PORT: number | string = process.env.PORT || 9000;
const PLAYGROUND_ENDPOINT: string = '/playground';
const GRAPHQL_ENDPOINT: string = '/graphql';

const appOptions: Options = {
  port: PORT,
  playground: PLAYGROUND_ENDPOINT,
  endpoint: GRAPHQL_ENDPOINT
};

const handleServerStart = (): void => {
  console.log(`server start on port ${PORT}`);
};

createConnection(ormConfig).then(() => {
  app.start(appOptions, handleServerStart);
});

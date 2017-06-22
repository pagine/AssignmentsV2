import config from 'config';
import * as express from './express';

const SERVER_INIT_PORT = config.get('Server.port');

export default function start() {
  let app = express.init();
  app.listen(SERVER_INIT_PORT, () => {
    console.log(`Server listening on port ${SERVER_INIT_PORT}`);
  });
}

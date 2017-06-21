import config from 'config';
import express from '../express/expressConfig';

const SERVER_INIT_PORT = config.get('Server.port');

function run() {
  let app = express();
  app.listen(SERVER_INIT_PORT, () => {
    console.log(`Server listening on port ${SERVER_INIT_PORT}`);
  });
}

run();

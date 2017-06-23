import bodyParser from 'body-parser';
import initRoutes from '../app/routes/index';
import express from 'express';

export function init() {
  let app = express();
  initRoutes(app);
  app.use(bodyParser.json());
  
  return app;
}

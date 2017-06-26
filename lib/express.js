import bodyParser from 'body-parser';
import initRoutes from '../app/routes/index';
import express from 'express';

export function init() {
  let app = express();
  app.use(bodyParser.json());
  initRoutes(app);
  
  return app;
}

import bodyParser from 'body-parser';
import initRoutes from '../app/routes/campaignRoute';
import express from 'express';

export function init() {
  let app = express();
  let routes = initRoutes();
  app.use(bodyParser.json());
  app.use('/campaigns', routes);
  return app;
}

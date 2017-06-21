import bodyParser from 'body-parser';
import initRoutes from '../routes/campaignRoute';
import express from 'express';

function initExpress() {
  let app = express();
  let routes = initRoutes();
  app.use(bodyParser.json());
  app.use('/campaigns', routes);
  return app;
}

module.exports = initExpress;

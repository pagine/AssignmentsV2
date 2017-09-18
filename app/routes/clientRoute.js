import express from 'express';
import {default as clientController} from '../controllers/clientController';
import Response from '../../lib/response';

function middlewareValidate(req, res, next) {
  if(req.headers.authorization) {
    next();
  } else {
    let response = new Response("Missing authorization header", 400);
    res.status(response.code).send(response.toJSON());
  }
}

function middlewareAuth(req, res, next) {
  if(req.headers.authorization) {
    clientController.validateToken(req, res, next);   
  } else {
    let response = new Response("Missing authorization header", 400);
    res.status(response.code).send(response.toJSON());
  }
}

export default function initClientRoutes() {
  const router = express.Router();
  router.post('/login', middlewareValidate, clientController.userLogin);
  router.get('/', middlewareValidate, middlewareAuth, clientController.getClients);
  router.get('/:clientId', middlewareValidate, middlewareAuth, clientController.getClientById);
  router.post('/', middlewareValidate, middlewareAuth, clientController.createClient);
  router.delete('/:clientId', middlewareValidate, middlewareAuth, clientController.deleteClient);
  router.get('/:clientId/lists', middlewareValidate, middlewareAuth, clientController.getList);

  return router;
}

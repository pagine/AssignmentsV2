import express from 'express';
import {default as clientController} from '../controllers/clientController';
import Response from '../../lib/response';

function middleware(req, res, next) {
	if(req.headers.authorization) {
		next();
	} else {
		let response = new Response("Missing authorization header", 400);
		res.status(response.code).send(response.toJSON());
	}
}

export default function initClientRoutes() {
  const router = express.Router();
  router.get('/', middleware, clientController.getClients);
  router.get('/:clientId', middleware, clientController.getClientById);
  router.post('/', middleware, clientController.createClient);
  router.delete('/:clientId', middleware, clientController.deleteClient);
  router.get('/:clientId/lists', middleware, clientController.getList);

  return router;
}

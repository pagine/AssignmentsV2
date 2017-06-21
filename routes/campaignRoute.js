import express from 'express';
import CampaignController from '../controllers/campaignController';

const router = express.Router();
const campaignController = new CampaignController();


function initRoutes() {
  router.get('/clients', (req, res) => {  
    campaignController.getClients(req, res);
  });

  router.get('/clients/:id', (req, res) => {
    campaignController.getClientById(req, res);
  });

  router.post('/clients', (req, res) => {
    campaignController.createClient(req, res);
  });

  router.delete('/clients/:id', (req, res) => {
    campaignController.deleteClient(req, res);
  });

  router.get('/clients/:id/lists', (req, res) => {
    campaignController.getList(req, res);
  });

  return router;
}

module.exports = initRoutes;

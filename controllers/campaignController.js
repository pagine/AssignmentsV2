import request from 'request-promise';
import config from 'config';

class CampaignController {
  constructor() {
    this.CAMPAIGN_API_URL = config.get('Campaign.API.url');
  }

  getClients(req, res) {
    let options = {
      uri: `${this.CAMPAIGN_API_URL}/clients.json`,
      method: 'GET', 
      headers: {
        'Authorization': req.headers.authorization
      },
      json: true
    };
    request(options)
     .then((data) => {
        res.status(200).send(data);
      })
     .catch((err) => {
        res.status(500).send(err);
      });
  }

  getClientById(req, res) {
    let options = {
      uri: `${this.CAMPAIGN_API_URL}/clients/${req.params.id}.json`,
      headers: {
        'Authorization': req.headers.authorization
      },
      json: true
    };
    request(options)
     .then((data) => {
        res.status(200).send(data);
      })
     .catch((err) => {
        res.status(500).send(err);
      });
  }

  createClient(req, res) {
    let options = {
      uri: `${this.CAMPAIGN_API_URL}/clients.json`,
      method: 'POST', 
      headers: {
        'Authorization': req.headers.authorization
      },
      body: req.body,
      json: true
    };
    request(options)
     .then((data) => {
        res.status(200).send(data);
      })
     .catch((err) => {
        res.status(500).send(err);
      });
  }

  deleteClient(req, res) {
    let options = {
      uri: `${this.CAMPAIGN_API_URL}/clients/${req.params.id}.json`,
      method: 'DELETE', 
      headers: {
        'Authorization': req.headers.authorization
      },
      json: true
    };
    request(options)
     .then((data) => {
        res.status(200).send(data);
      })
     .catch((err) => {
        res.status(500).send(err);
      });
  }

  getList(req, res) {
    let options = {
      uri: `${this.CAMPAIGN_API_URL}/clients/${req.params.id}/lists.json`,
      method: 'GET',
      headers: {
        'Authorization': req.headers.authorization
      },
      json: true
    };
    request(options)
     .then((data) => {
        res.status(200).send(data);
      })
     .catch((err) => {
        res.status(500).send(err);
      });
  }
}

module.exports = CampaignController;

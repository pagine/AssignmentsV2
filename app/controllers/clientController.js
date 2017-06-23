import request from 'request-promise';
import config from 'config';

export default class ClientController {

  static getClients(req, res) {
    let options = {
      uri: `${config.get('Campaign.API.url')}/clients.json`,
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

  static getClientById(req, res) {
    let options = {
      uri: `${config.get('Campaign.API.url')}/clients/${req.params.clientId}.json`,
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

  static createClient(req, res) {
    let options = {
      uri: `${config.get('Campaign.API.url')}/clients.json`,
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

  static deleteClient(req, res) {
    let options = {
      uri: `${config.get('Campaign.API.url')}/clients/${req.params.clientId}.json`,
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

  static getList(req, res) {
    let options = {
      uri: `${config.get('Campaign.API.url')}/clients/${req.params.clientId}/lists.json`,
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

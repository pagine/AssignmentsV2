import request from 'request-promise';
import config from 'config';
import User from '../models/client';

export default class ClientController {

  static getClients(req, res) {
    let options = {
      uri: `${config.get('Campaign.API.url')}/clients.json`,
      method: 'GET', 
      headers: {
        'Authorization': `Basic ${req.headers.authorization}`
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
        'Authorization': `Basic ${req.headers.authorization}`
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
        'Authorization': `Basic ${req.headers.authorization}`
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
        'Authorization': `Basic ${req.headers.authorization}`
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
        'Authorization': `Basic ${req.headers.authorization}`
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

  static userLogin(req, res) {
    let authHeader = req.headers.authorization.split(' ').pop();
    if(authHeader) {
      let decodedAuth = Buffer.from(authHeader, 'base64').toString();
      let [username, password] = decodedAuth.split(':');
      User.getClient(username, password)
       .then((user) => {
          res.send({'access_token':user.token});
        })
       .catch((error) => {
          res.status(401).send({'error':'Unauthorized'});
        });
    } else {
      res.status(401).send({'error':'Unauthorized'});
    }
  }

  static validateToken(req, res, next) {
    User.validateToken(req.headers.authorization)
     .then((user) => {
        next();
      })
     .catch((err) => {
        res.status(401).send({'error':'Unauthorized'});
      });
  }
}

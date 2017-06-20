const request = require('request-promise');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const CAMPAIGN_API_URL = "https://api.createsend.com/api/v3.1";
const CAMPAIGN_API_AUTH = "Basic ZDc0Y2I3ZDhlNTlhNzU0ZmEzYmFiMDZlMjlmZDRlYTQ6YWJj";
const SERVER_INIT_PORT = 8080;

app.use(bodyParser.json());

app.get('/campaigns/clients', (req, res) => {
  let options = {
    uri: CAMPAIGN_API_URL+"/clients.json",   
    method: "GET", 
    headers: {
      'Authorization': CAMPAIGN_API_AUTH
    },
    json: true
  };
  request(options)
  .then(function (data) {
    res.status(200);
    res.send(data);
  })
  .catch(function (err) {
    res.status(500);
    res.send(err);
  });  
});

app.get('/campaigns/clients/:id', (req, res) => {
  let options = {
    uri: CAMPAIGN_API_URL+"/clients/"+req.params.id+".json",    
    headers: {
      'Authorization': CAMPAIGN_API_AUTH
    },
    json: true
  };
  request(options)
  .then(function (data) {
    res.status(200);
    res.send(data);
  })
  .catch(function (err) {
    res.status(500);
    res.send(err);
  });
});

app.post('/campaigns/clients', (req, res) => {
  let options = {
    uri: CAMPAIGN_API_URL+"/clients.json",   
    method: "POST", 
    headers: {
      'Authorization': CAMPAIGN_API_AUTH
    },
    body: req.body,
    json: true
  };
  request(options)
  .then(function (data) {
    res.status(200);
    res.send(data);
  })
  .catch(function (err) {
    res.status(500);
    res.send(err);
  });
});

app.delete('/campaigns/clients/:id', (req, res) => {
  let options = {
    uri: CAMPAIGN_API_URL+"/clients/"+req.params.id+".json",   
    method: "DELETE", 
    headers: {
      'Authorization': CAMPAIGN_API_AUTH
    },
    json: true
  };
  request(options)
  .then(function (data) {
    res.status(204);
    res.send(data);
  })
  .catch(function (err) {
    res.status(500);
    res.send(err);
  });
});

app.get('/campaigns/clients/:id/lists', (req, res) => {
  let options = {
    uri: CAMPAIGN_API_URL+"/clients/"+req.params.id+"/lists.json",   
    method: "GET",
    headers: {
      'Authorization': CAMPAIGN_API_AUTH
    },
    json: true
  };
  request(options)
  .then(function (data) {
    res.status(200);
    res.send(data);
  })
  .catch(function (err) {
    res.status(500);
    res.send(err);
  });
});

app.listen(SERVER_INIT_PORT, () => {
  console.log(`Server listening on port ${SERVER_INIT_PORT}`);
});


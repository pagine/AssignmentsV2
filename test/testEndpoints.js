
import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
const should = chai.should();

let access_token;
describe('Login', () => {
  it('should login user and return token', (done) => {
    chai.request('http://localhost:8080')
     .post('/clients/login')
     .set('Authorization', 'Basic cGF3YW5hZ2luZTp0ZXN0')
     .end((err, res) => {
        access_token = res.body.access_token;
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('access_token');
        if(access_token) {
          runClientTestSuite(access_token);
        }
        done();
      });
  });
});

function runClientTestSuite(access_token) {
  describe('Clients', () => {
    describe('Get all clients', () => {      
      it('should get all the clients', (done) => {        
        chai.request('http://localhost:8080')
         .get('/clients')
         .set('Authorization', access_token)
         .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            done();
          });
      });
    });

    describe('Get client by id', () => {
      it('should return client details', (done) => {
        chai.request('http://localhost:8080')
         .get('/clients/d3b8206001b1b66deef76efe0f5e0942')
         .set('Authorization', access_token)
         .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('BasicDetails');
            done();
          });
      });
    });

    describe('Create new client', () => {
      it('should create a new client', (done) => {
        let client = {
          "CompanyName": "My Client2",
          "Country": "Australia",
          "TimeZone": "(GMT+10:00) Canberra, Melbourne, Sydney"
        }
        chai.request('http://localhost:8080')
         .post('/clients')
         .set('Authorization', access_token)
         .set('Content-Type', 'application/json')
         .send(client)
         .end((err, res, body) => {
            res.should.have.status(200);
            body.should.be.a('string');
            done();
          });
      });
    });

    describe('Delete client', () => {
      it('should delete an existing client', (done) => {
        chai.request('http://localhost:8080')
         .delete('/clients/612c85ab7c43b602821a0877dbada358')
         .set('Authorization', access_token)
         .end((err, res, body) => {            
            res.should.have.status(200);
            done();
          });
      });
    });

    describe('Get lists', () => {
      it('should return all lists for a client', (done) => {
        chai.request('http://localhost:8080')
         .get('/clients/b401f92df2fa017fb9a3bbe65fc0c713/lists')
         .set('Authorization', access_token)
         .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            done();
          });
      });
    });
  });
}

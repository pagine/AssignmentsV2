var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

const should = chai.should();

function db1() {
  this.data = [];
}

db1.prototype.clear = function(done) {
  return new Promise(function(resol, reject) {
    this.data = [];
    resol(this.data);
  });
}

db1.prototype.save = function(arr) {
  return new Promise(function(resol, reject) {
    this.data = arr;
    resol(this.data);
  });
}

db1.prototype.find = function(obj) {
  return new Promise(function(resol, reject) {
    resol(this.data);
  });
}

const db = new db1();

beforeEach(function() {
  console.log('\tbefore each hook');
  return db.clear()
   .then(function() {
      return db.save(['tobi', 'loki', 'jane']);
    });
});

setTimeout(function(){
  describe('dbConnection', function() {  
    describe('#find()', function() {
      it('respond with matching records', function() {
        return db.find({ type: 'User' }).should.eventually.have.length(3);
      });
    });

    describe('#find2()', function() {
      it('respond with matching records', function() {
        return db.find({ type: 'User' }).should.eventually.have.length(3);
      });
    });

    describe.skip('#find3()', function() {
      it('skipped: respond with matching records', function() {
        return db.find({ type: 'User' }).should.eventually.have.length(3);
      });
    });  
  });
  run();
}, 1000);

// run mocha with --delay option
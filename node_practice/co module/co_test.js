var co = require('co');
var request = require('request');

co(function *(){
  var result = yield Promise.resolve(true);
}).catch(function(err){
	console.log(err);
});

co(function *(){
  var a = request('https://www.google.com');
  var b = request('https://www.gmail.com');
  var c = Promise.resolve(3);
  var res = yield [a, b, c];
  console.log(res);
}).catch(function(err){
	console.log(err);
});

describe('User', function() {
  describe('#save()', function() {
    it('should save without error', function(done) {
      var user = new User('Luna');
      user.save(done);
    });    
  });
});

function User(name) {
	this.name = name;
}

User.prototype.save = function(done) {
	if(this.name === 'test') 
		return done(new Error('Failed to save'));
	done();
}

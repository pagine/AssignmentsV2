import mongoose from '../../lib/mongoose.js';

var ClientSchema = mongoose.Schema({
  firstName: {type: String},
  middleName: {type: String},
  lastName: {type: String},
  username: {type: String},
  password: {type: String},
  token: {type: String}
});

ClientSchema.statics.getClient = function (username, password) {
  return this.findOne({username, password});
}

ClientSchema.statics.validateToken = function (token) {
  return this.findOne({token, token});
}

export default mongoose.model('Client', ClientSchema);

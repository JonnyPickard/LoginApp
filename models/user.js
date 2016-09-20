var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var userSchema = mongoose.Schema({
  username: {
    type: String,
    index: true
  },
  password: {
    type: String
  },
  email: {
    type: String
  },
  name: {
    type: String
  }
});

var User = module.exports = mongoose.model('User', userSchema);

module.exports.createUser = function(newUser, callback) {
  bcrypt.hash(newUser.password, bcrypt.genSaltSync(10), function(err, hash) {
    newUser.password = hash;
    newUser.save(callback);
  });
};








//

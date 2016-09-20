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

module.exports.getUserByUsername = function(username, callback){
  var query = {username: username};
  User.findOne(query, callback);
};

module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
};

module.exports.comparePassword = function(candidatePassword, hashPassword, callback){
  bcrypt.compare(candidatePassword, hashPassword, function(err, isMatch){
    if(err) throw err;
    callback(null, isMatch);
  });
};









//

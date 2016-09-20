var express = require('express');
var router = express.Router();

//Register
router.get('/register', function(req, res, next) {
  res.render('register');
});

//Login
router.get('/login', function(req, res, next){
  res.render('login');
});

module.exports = router;

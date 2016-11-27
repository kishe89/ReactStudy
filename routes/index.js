var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{title : 'Welcome_ReactWorld'});
});
router.get('/example1', function(req, res, next) {
  res.render('example1');
});
router.get('/example2', function(req, res, next) {
  res.render('example2');
});
router.get('/example3', function(req, res, next) {
  res.render('example3');
});
router.get('/example4', function(req, res, next) {
  res.render('example4');
});
router.get('/example5', function(req, res, next) {
  res.render('example5');
});

module.exports = router;

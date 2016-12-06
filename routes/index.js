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
router.get('/example6', function(req, res, next) {
  res.render('example6');
});
router.get('/example7', function(req, res, next) {
  res.render('example7');
});
router.get('/example8', function(req, res, next) {
  res.render('example8');
});
router.get('/example9', function(req, res, next) {
  res.render('example9');
});
router.get('/example10', function(req, res, next) {
  res.render('example10');
});

module.exports = router;

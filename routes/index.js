var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Đăng nhập' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Đăng nhập' });
});
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Trang chủ' });
});
// login
router.post('/', function(req, res, next) {
  var user = req.body['user'];
  var pass = req.body['user'];

});
module.exports = router;

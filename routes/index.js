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
  // check login
    // thanh cong
      // sinh sid, hay key cm gi day, save vao db
      // sai sid ve cho user luu local storage
    // that bai
      // gui ve chuoi "fail"

  var check = true;
  if (check){
    res.send("sid"); // them username teacher
  }
  else {
    res.send("fail");
  }
});
module.exports = router;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/student/Shomepage', function(req, res, next) {
  res.render('student/Shomepage', { title: 'Trang chủ', layout:'student/student-layout' });
});
router.get('/student/Sprofile', function(req, res, next) {
  res.render('student/Sprofile', { title: 'Thông tin', layout:'student/student-layout' });
});
module.exports = router;

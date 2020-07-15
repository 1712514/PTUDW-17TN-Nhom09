var express = require('express');
var router = express.Router();

/* GET users listing. */

// Student
router.get('/student/Shomepage', function(req, res, next) {
  res.render('student/Shomepage', { title: 'Trang chủ', layout:'student/student-layout' });
});
router.get('/student/Sprofile', function(req, res, next) {
  res.render('student/Sprofile', { title: 'Thông tin', layout:'student/student-layout' });
});

// Teacher
router.get('/teacher/Thomepage', function(req, res, next) {
  res.render('teacher/Thomepage', { title: 'Trang chủ', layout:'teacher/teacher-layout' });
});
router.get('/teacher/Tprofile', function(req, res, next) {
  res.render('teacher/Tprofile', { title: 'Thông tin', layout:'teacher/teacher-layout' });
});


module.exports = router;

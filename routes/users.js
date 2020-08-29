var express = require('express');
var router = express.Router();

/* GET users listing. */

// check sid
checksid = (sid, callback) => {
  // connect db
  console.log(sid);
  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      if(this.responseText == "YES")
        callback(true);
      else
        callback(false);
    }
  };
  var url = "http://localhost:3000/api/sid/" + sid;
  console.log(url);
  xhttp.open("GET", url , true);
  xhttp.send();
}

// Student
router.get('/student/Shomepage', async function(req, res, next) {
  checksid(req.cookies.sid, (status)=>{
    if (status){
      res.render('student/Shomepage', { title: 'Trang chủ', layout:'student/student-layout' });
      console.log("in");
    }
    else {
      console.log("login");
      res.render('login', { title: 'Đăng nhập' });
    }
  })
});
router.get('/student/Sprofile', function(req, res, next) {
  checksid(req.cookies.sid, (status)=>{
    if (status){
      res.render('student/Sprofile', { title: 'Thông tin', layout:'student/student-layout' });
    }
    else {
      console.log("login");
      res.render('login', { title: 'Đăng nhập' });
    }
  })
});
router.get('/student/Ssearchreview', function(req, res, next) {
  checksid(req.cookies.sid, (status)=>{
    if (status){
      res.render('student/Ssearchreview', { title: 'Luyện chuyên đề', layout:'student/student-layout' });
    }
    else {
      console.log("login");
      res.render('login', { title: 'Đăng nhập' });
    }
  })
});
router.get('/student/Ssearchtest', function(req, res, next) {
  checksid(req.cookies.sid, (status)=>{
    if (status){
      res.render('student/Ssearchtest', { title: 'Luyện đề', layout:'student/student-layout' });
    }
    else {
      console.log("login");
      res.render('login', { title: 'Đăng nhập' });
    }
  })
});
router.get('/student/Stest', function(req, res, next) {
  checksid(req.cookies.sid, (status)=>{
    if (status){
      res.render('student/Stest', { title: 'Luyện đề', layout:'student/student-layout' });
    }
    else {
      console.log("login");
      res.render('login', { title: 'Đăng nhập' });
    }
  })
});
router.get('/student/Sevent', function(req, res, next) {
  checksid(req.cookies.sid, (status)=>{
    if (status){
      res.render('student/Sevent', { title: 'Luyện đề', layout:'student/student-layout' });
    }
    else {
      console.log("login");
      res.render('login', { title: 'Đăng nhập' });
    }
  })
});
router.get('/student/Sreview', function(req, res, next) {
  checksid(req.cookies.sid, (status)=>{
    if (status){
      res.render('student/Sreview', { title: 'Luyện chuyên đề', layout:'student/student-layout' });
    }
    else {
      console.log("login");
      res.render('login', { title: 'Đăng nhập' });
    }
  })
});
router.get('/student/Sscoreboard', function(req, res, next) {
  checksid(req.cookies.sid, (status)=>{
    if (status){
      res.render('student/Sscoreboard', { title: 'Bảng xếp hạng', layout:'student/student-layout' });
    }
    else {
      console.log("login");
      res.render('login', { title: 'Đăng nhập' });
    }
  })
});
// Teacher
router.get('/teacher/Thomepage', function(req, res, next) {
  checksid(req.cookies.sid, (status)=>{
    if (status){
      res.render('teacher/Thomepage', { title: 'Trang chủ', layout:'teacher/teacher-layout' });
    }
    else {
      console.log("login");
      res.render('login', { title: 'Đăng nhập' });
    }
  })
});
router.get('/teacher/Tscoreboard', function(req, res, next) {
  checksid(req.cookies.sid, (status)=>{
    if (status){
      res.render('teacher/Tscoreboard', { title: 'Bảng xếp hạng', layout:'teacher/teacher-layout' });
    }
    else {
      console.log("login");
      res.render('login', { title: 'Đăng nhập' });
    }
  })
});
router.get('/teacher/Tprofile', function(req, res, next) {
  checksid(req.cookies.sid, (status)=>{
    if (status){
      res.render('teacher/Tprofile', { title: 'Thông tin', layout:'teacher/teacher-layout' });
    }
    else {
      console.log("login");
      res.render('login', { title: 'Đăng nhập' });
    }
  })
});
router.get('/teacher/Tevent', function(req, res, next) {
  checksid(req.cookies.sid, (status)=>{
    if (status){
      res.render('teacher/Tevent', { title: 'Thông tin', layout:'teacher/teacher-layout' });
    }
    else {
      console.log("login");
      res.render('login', { title: 'Đăng nhập' });
    }
  })
});

module.exports = router;

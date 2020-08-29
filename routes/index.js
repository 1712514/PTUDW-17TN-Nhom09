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
  var pass = req.body['pass'];
  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      if (this.responseText != "NO"){
        var link = (this.responseText.startsWith("student")) ? "student/Shomepage" : "teacher/Thomepage";
        link = "https://uniez.herokuapp.com/users/" + link + "?sid=" + this.responseText.substr[7];
        res.send(link);
      }
      else {
        res.send("fail");
      }
    }
  };
  var url = "http://localhost:8080/" + user + '&' + pass;
  console.log(url);
  xhttp.open("GET", url , true);
  xhttp.send();
});


module.exports = router;

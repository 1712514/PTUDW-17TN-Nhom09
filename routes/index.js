var express = require('express');
var router = express.Router();
const History = require('../Model/history');

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
        link = "/users/" + link;
        res.cookie('sid', this.responseText.substr(7));
        res.send(link);
      }
      else {
        res.send("fail");
      }
    }
  };
  var url = "https://uniez.herokuapp.com/api/auth/" + user + '&' + pass;
  console.log(url);
  xhttp.open("GET", url , true);
  xhttp.send();
});

router.get("/api/history/:key", async (request, response)=> {
  try {
    var key = request.params.key;
    var result = await History.aggregate([
      {
        $match: {
          "id_event": key
        }
      },
      {
        $lookup: {
          from: 'user',
          localField: 'id_student',
          foreignField: 'id',
          as: 'user'
        }
      },
      { 
        "$project": { 
          "score": 1,
          "user": { "$arrayElemAt": [ "$user", 0 ] } 
        }
      },
      {
        $sort: {
          score: -1
        }
      }
    ]);
    result = result.map((item) => ({
      name: item.user.name, grade: item.score
    }));
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});
module.exports = router;

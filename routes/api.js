var express = require('express');
const User = require('../Model/user');
var router = express.Router();
const History = require('../Model/history');
var md5 = require('md5');
const Exam = require('../Model/exams');
const Events = require('../Model/events');
const Questions = require('../Model/questions');
const { request, response } = require('../app');
const { replaceOne } = require('../Model/history');
router.get("/history/:key", async (request, response)=> {
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
  router.get("/auth/:user&:pass", async (request, response)=> {
    try {
      var user = request.params.user;
      var pass = request.params.pass;
      
      var result = await User.find({email: user, pass: md5(pass)});
      if(result.length == 0)
        response.send("NO");
      else {
        if (result[0]['authority'] == "1")
          response.send("teacher"+result[0]['_id']);
        else if (result[0]['authority'] == "0")
          response.send("student"+result[0]['_id']);
        else 
          response.send("admin"+result[0]['_id']);
      }
    } catch (error) {
      response.status(500).send(error);
    }
  });

router.get("/questions/:key", async(request, response) => {
    try {
        var key = request.params.key;
        var result = await Questions.find({id: key});
        response.send(result);
      } catch (error) {
        response.status(500).send(error);
      }
});

router.get("/user/:id", async(request, response) => {
    try {
        var id = request.params.id;
        var result = await User.aggregate([
            {
              $match: {
                "id": id
              }
            },
            {
              $lookup: {
                from: 'history',
                localField: 'id',
                foreignField: 'id_student',
                as: 'history'
              }
            },
            
          ]);
          
          response.send(result);
        } catch (error) {
          response.status(500).send(error);
        }
});

router.get("/sid/:sid", async(request, response) =>{
    try {
        var id = request.params.sid;
        var result = await User.find({_id: id});
        console.log(result.length);
        if(result.length = 1) response.send("YES");
      } catch (error) {
        response.send("NO");
      }
});

// get exams
router.get("/exam/:id", async(request, response) =>{
  try {
    var n = 0;
    var id = request.params.id;
    var result = await Exam.find({id: id});
    var temp = "Câu ";
    var res = [];
    result[0].question.map(async(item) => {
      var a = await Questions.find({id: item});
      n = n + 1;
      a = a.map(async(i) => {
        await res.push({order: temp + n,
          question: i.content,
          A: i.a,
          B: i.b,
          C: i.c,
          D: i.d,
          Sol: i.sol,
          answer: i.ans,});
      });
    });
    setTimeout(() => { response.send(res); }, 1500);
    
  } catch (error) {
    response.send("NO");
  }
});

router.get("/exam", async(request, response) =>{
  try {
    var result = await Exam.find();
    result = result.map((item) => ({
      title: item.name, id: item.id,
    }));
    response.send(result);
    
  } catch (error) {
    response.send("NO");
  }
})
module.exports = router;
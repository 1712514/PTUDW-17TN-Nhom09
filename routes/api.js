var express = require('express');
const User = require('../Model/user');
var router = express.Router();
const History = require('../Model/history');
var md5 = require('md5');

const Events = require('../Model/events');
const Questions = require('../Model/questions');
const { request, response } = require('../app');
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
module.exports = router;
var express = require('express');
const { model } = require('../Model/user');
var router = express.Router();
const History = require('../Model/history');
const Events = require('../Model/events');
const User = require('../Model/user');
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

router.get("/questions/:key", async(request, response) => {
    try {
        var key = request.params.key;
        var result = await Questions.find({id: key});
        response.send(result);
      } catch (error) {
        response.status(500).send(error);
      }
});
module.exports = router;
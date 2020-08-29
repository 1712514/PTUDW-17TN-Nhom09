var express = require('express');
const { model } = require('../Model/user');
var router = express.Router();
const History = require('../Model/history');

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
module.exports = router;
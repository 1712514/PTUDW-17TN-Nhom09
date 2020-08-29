const Mongoose = require("mongoose");

module.exports = Mongoose.model(
    'history',
    new Mongoose.Schema(
      {
        id_event: String,
        id_student: String,
        id_exam: String,
        score: String
      },
      { collection: 'history'}
    )
  );
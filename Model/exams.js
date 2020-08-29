const Mongoose = require("mongoose");

module.exports = Mongoose.model(
    'exams',
    new Mongoose.Schema(
      {
        id: String,
        name: String,
        level: String,
        question: Array
      },
      { collection: 'exams'}
    )
  );
const Mongoose = require("mongoose");

module.exports = Mongoose.model(
    'questions',
    new Mongoose.Schema(
      {
        id: String,
        content: String,
        a: String,
        b: String,
        c: String,
        d: String,
        ans: String,
        sol: String
      },
      { collection: 'questions'}
    )
  );
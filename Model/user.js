const Mongoose = require("mongoose");

module.exports = Mongoose.model(
    'user',
    new Mongoose.Schema(
      {
        id: String,
        name: String,
        email: String,
        authority: String
      },
      { collection: 'user'}
    )
  );
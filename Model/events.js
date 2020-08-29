const Mongoose = require("mongoose");

module.exports = Mongoose.model(
    'events',
    new Mongoose.Schema(
      {
        id_event: String,
        id_exam: String,
        id_auth: String,
        time: String
      },
      { collection: 'events'}
    )
  );
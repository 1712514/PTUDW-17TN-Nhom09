const Mongoose = require("mongoose");
Mongoose
    .set('useNewUrlParser', true)
    .set('useFindAndModify', false)
    .set('useCreateIndex', true)
    .connect("mongodb+srv://admin9AM:Khaideptrai@uniez.hpiws.mongodb.net/uniez?retryWrites=true&w=majority")
    .then(() => console.log("Connected to MongoDB..."))
    .catch(() => console.error("Could not connect to MongoDB..."));
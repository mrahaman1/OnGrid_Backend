const mongoose = require("mongoose");

mongoose.set("strictQuery",true);

const connection = mongoose.connect("mongodb+srv://mustafijurrahaman73586:Barhra123@ongrid.dzmkpvu.mongodb.net/?retryWrites=true&w=majority")
console.log("connected to database")
module.export= connection;
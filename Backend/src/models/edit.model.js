const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let PageDetails = new Schema({
  name: {type: String,required: true, trim: true},
  title: {type: String,required: true, trim: true},
  description: {type: String, trim: true},
  date: {type: String, required: true, trim: true},
  time: {type: String, required: true, trim: true},
});

module.exports = mongoose.model("pages", PageDetails);
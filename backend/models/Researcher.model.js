const mongoose = require("mongoose");
const {Schema} = require("mongoose");


let researcher = new Schema({
    fileData: {
        type: String,
        required: true
    },
    fileName: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('researcher', researcher);
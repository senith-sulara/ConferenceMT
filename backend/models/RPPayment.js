const mongoose = require("mongoose");
const {Schema} = require("mongoose");

let rppayment = new Schema({

    cardType: {
        type: String,
        required: true
    },
    cardNumber: {
        type: String,
        required: true
    },
    expire: {
        type: String,
        required: true
    },
    cvv: {
        type: String,
        required: true
    },
    holder: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    researchPaperId: {
        type: String,
        required: true
    },
    researchPaperName: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('rppayment', rppayment);
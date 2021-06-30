const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let workshop = new Schema({
    workShop: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    fees: {
        type: Number,
        required: true
    },
    conductor: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
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

module.exports = mongoose.model('workshop', workshop);
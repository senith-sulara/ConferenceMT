const express = require('express');
const router = express.Router();
const WSPayment = require('../models/WSPayment')

router.route('/add').post(function (req, res) {
    let wspayment = new WSPayment(req.body);
    console.log(wspayment);
    wspayment.save()
        .then(wspayment => {
            res.status(200).json({'success': 'successful'});
        }).catch(err => {
        res.status(400).send('fail');
    });
});

module.exports = router;
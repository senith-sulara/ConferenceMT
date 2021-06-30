const express = require('express');
const router = express.Router();
const RPPayment = require('../models/RPPayment')

router.route('/add').post(function (req, res) {
    let rpPayment = new RPPayment(req.body);
    console.log(rpPayment);
    rpPayment.save()
        .then(rpPayment => {
            res.status(200).json({'success': 'successful'});
        }).catch(err => {
        res.status(400).send('fail');
    });
});

module.exports = router;
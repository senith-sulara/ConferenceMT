const express = require('express');
const router = express.Router();
const Researcher = require('../models/Researcher.model')

router.route('/add').post(function (req, res) {
    let researcher = new Researcher(req.body);
    console.log(researcher);
    researcher.save()
        .then(researcher => {
            res.status(200).json({'success': 'successful'});
        }).catch(err => {
        res.status(400).send('fail');
    });
});

router.route('/getAll/:userId').get(function (req, res) {

    const userId = req.params.userId;
    Researcher.find({user: userId}).populate("user").exec().then(event => {
        console.log(event)
        res.status(200).json(event)
    }).catch(err => {
        res.status(500).json(err);
    });
});

// router.route('/getAll').get(function (req, res) {
//     TourBook.find(function (err, event) {
//         if (!err) {
//             res.json(event);
//         } else {
//             res.status(400).send('faild');
//         }
//     });
// });

module.exports = router;
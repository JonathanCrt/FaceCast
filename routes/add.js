var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var Offer = require('../models/offer');




router.post('/ok', function (req, res) {
    var newOffer = new Offer({
        nameEvenement: req.body.nameEvenement,
        type: req.body.type,
        dateBegin: req.body.dateBegin,
        numberDay: req.body.numberDay,
        numberExtra: req.body.numberExtra,
        role: req.body.role
    });
    newOffer.save(function (err) {
        if (err) {

            res.send("ok!")
        }
        else { res.redirect("/offer"); }
    });


});
router.get('/', function (req, res) {
	res.render('add');
});



module.exports = router;
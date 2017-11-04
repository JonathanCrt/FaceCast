var Offer = require('../models/offer');
var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

router.get('/', function (req, res, next) {
  //here
  Offer.find(function (err, currentoffers) {
    if (err) throw err;
      res.render('offer', { title: 'List of offers', offer: currentoffers });
      //res.json(currentoffers);
  });
});



router.post(function (req, res) {
  //We use  offer schema
  var offer = new Offer();
  //we retrieve the data received to add them to the offer object
  offer.nameEvenement = req.body.nameEvenement;
  offer.type = req.body.type;
  offer.dateBegin = req.body.dateBegin;
  offer.numberDay = req.body.numberDay;
  offer.numberExtra = req.body.numberExtra;
  offer.role = req.body.role;
  //We store the base object
  offer.save(function (err) {
    if (err) {
      res.send(err);
    }
    res.send({ message: 'Congratulations, the offer is now stored in database' });
  })
});


module.exports = router;
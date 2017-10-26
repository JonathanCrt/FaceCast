var Extra = require('../models/extra');
var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');



router.get('/', function (req, res, next) {
  //here
  Extra.find(function (err, currentextras) {
    if (err) throw err;
    res.render('extra', { title: 'List of extras', extra: currentextras });
    //res.json(currentextras);
  });
});


router.post(function (req, res) {
  //We use  offer schema
  var newExtra = new Extra();
  //we retrieve the data received to add them to the offer object
  newExtra.last_name = req.body.last_name;
  newExtra.first_name = req.body.first_name;
  newExtra.email = req.body.email;
  //We store the base object
  newExtra.save(function (err) {
    if (err) {

      res.send(err);
    }
    res.send({ message: 'Congratulations, the offer is now stored in database' });
  });
});

// router.get('/', function (req, res) {
//   res.render('addExtra');
// });

module.exports = router;


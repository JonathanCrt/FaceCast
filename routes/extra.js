var Extra = require('../models/extra');
var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');


router.get('/extra', function(req, res, next) {
  Extra.find({}, function(err, currentextras) {
     if (err) throw err;
     res.render('extra', { title: 'extras', extras: currentextras });
  });
});


module.exports = router;
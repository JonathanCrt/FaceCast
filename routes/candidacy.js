var Candidacy = require('../models/candidacy');
var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

router.get('/', function (req, res, next) {
  //here
  Candidacy.find(function (err, currentcandidacys) {
    if (err) throw err;
    res.render('candidacy', { title: 'List of Applications', candidacy: currentcandidacys });
    //res.json(currentcandidacys);
  });
});


module.exports = router;
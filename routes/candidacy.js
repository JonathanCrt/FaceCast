var modelCandidacy = require('../models/candidacy');
var modelExtra = require('../models/extra');
var modelOffer = require('../models/offer');
var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');


/* router.get('/', function (req, res, next) {
  //here
  Candidacy.find(function (err, currentcandidacys) {
    if (err) throw err;
    res.render('candidacy', { title: 'List of  Applications', candidacy: currentcandidacys });
    //res.json(currentcandidacys);
  });
}); */


/* GET home page. */
router.get('/', function (req, res, next) {

  modelCandidacy.aggregate([
    {
      $lookup: {
        from: "offers",
        localField: "idOffer",
        foreignField: "_id",
        as: "offer"
      }
    },
    {
      $lookup: {
        from: "extras",
        localField: "idExtra",
        foreignField: "_id",
        as: "extra"
      }
    }
  ]).exec(function (err, currentcandidacys) {
    if (err) throw err;
    res.render('candidacy', { title: 'List of Applications', candidacy: currentcandidacys });
    //res.json(currentcandidacys)
  });
});


// Update candidacy
router.post('/update/:id', function (req, res, next) {
  modelCandidacy.findByIdAndUpdate(req.params.id, {
    etat: req.body.etat
  }, function (err, doc) {
    if (err) {
      console.log('error');
    }
    else {
      res.redirect('/candidacy');
      console.log(doc);
    }
  });
});


module.exports = router;
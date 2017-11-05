var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var modelCandidacy = require('../models/candidacy');
var modelExtra = require('../models/extra');
var modelOffer = require('../models/offer');
var objectId = require('mongoose').Types.ObjectId;

router.get('/', function (req, res, next) {
    res.send('Hi ApiRest , Choose view : /offer or  /extra or /candidacy');
});

// Offers
router.get('/offer', function (req, res, next) {
    modelOffer.Offer.find({}, function (err, offres) {
        if (err) throw err;
        res.json(offers);
    });
});
router.get('/offer/:nb', function (req, res, next) {

    model.Offer.find({}, function (err, offers) {
        if (err) throw err;
        if (req.params.nb == 0) {
            res.json(offres[0]);
        }
        else {
            res.json(offers.splice(0, req.params.nb));
        }
    });
});

// Extras
router.get('/extra', function (req, res, next) {
    modelExtra.Extra.find({}, function (err, extras) {
        if (err) throw err;
        res.json(extras);
    })
});

// candidacys
router.get('/candidacy', function (req, res, next) {
    modelCandidacy.Candidacy.find({}, function (err, candidacys) {
        if (err) throw err;
        res.json(candidacys);
    });
});

// candidacy
router.post('/candidacy', function (req, res, next) {
    var candidacy = new model.Candidacy({
        etat: req.body.etat,
        idOffer: req.body.idOffer,
        idExtra: req.body.idExtra
    });
    candidacy.save(function (err) {
        if (err) throw err;
        res.json(candidacy);
    });
});

// My applications
router.get('/candidacy/:idExtra', function (req, res, next) {
    modelCandidacy.Candidacy.aggregate([
        {
            $match: { idExtra: objectId(req.params.idExtra) }
        },
        {
            $lookup: {
                from: "offers",
                localField: "idOffer",
                foreignField: "_id",
                as: "offer"
            }
        }]).exec(function (err, candidacy) {
            res.json(candidacy);
    });
});
















module.exports = router;
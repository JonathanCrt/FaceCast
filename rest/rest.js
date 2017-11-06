var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var modelCandidacy = require('../models/candidacy');
var modelExtra = require('../models/extra');
var modelOffer = require('../models/offer');
var objectId = require('mongoose').Types.ObjectId;

router.get('/', function (req, res, next) {
    res.send('Hi ApiRest , Choose roads : /offer or  /extra or /candidacy');
});

// 1: Collection Offer
    router.get('/offer', function (req, res, next) {
        modelOffer.find({}, function (err, offers) {
            if (err) throw err;
            res.json(offers);
        });
    });
    router.get('/offer/:number', function (req, res, next) {

        modelOffer.find({}, function (err, offers) {
            if (err) throw err;
            if (req.params.number == 0) {
                res.json(offers[0]);
            }
            else {
                res.json(offers.splice(0, req.params.number));
            }
        });
    });

// 2 : Collection Extra
    router.get('/extra', function (req, res, next) {
        modelExtra.find({}, function (err, extras) {
            if (err) throw err;
            res.json(extras);
        })
    });

//1 + 2 :  Collection Candidacy
    router.get('/candidacy', function (req, res, next) {
        modelCandidacy.find({}, function (err, candidacys) {
            if (err) throw err;
            res.json(candidacys);
        });
    });
    router.post('/candidacy', function (req, res, next) {
        var candidacy = new modelCandidacy({
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
        modelCandidacy.aggregate([
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
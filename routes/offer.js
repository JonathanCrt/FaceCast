var Offer = require('../models/offer');
var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var monk = require('monk');
var mongoose = require('mongoose');
var mongo = require('mongodb');


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

router.get('/delete/:id', function (req, res, next) {

    mongoose.connect('mongodb://localhost:27107/faceCast', function (err) {
        if (err) { throw err; }
    });

    var db = req.db;
    var getId = req.params.id;
    var collection = db.get('offers');
    var ObjectId = new mongo.ObjectID(getId);


    collection.remove({ _id: mongoose.Types.ObjectId(getId) }, function (err, doc) {

        if (err) {

            throw err;

        } else {

            db.close();
            res.redirect('/offer');
        }

    });


});

/* router.post('/delete/:id', function (req, res, next) {
    var db = req.db;
    var getId = req.body.id;
    var collection = db.get('offers');
    var objectId = new mongo.ObjectID(getId);
    collection.remove({
        _id: objectId
    }, function (err, doc) {
        if (err) {
            res.send("Pas glop !");
        } else {
            res.redirect("/offer");
        }
    });
}); */









module.exports = router;
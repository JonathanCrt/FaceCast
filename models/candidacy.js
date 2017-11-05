var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var candidacySchema = Schema ({
    etat : {type : String , default: 'Waiting'},
    idExtra :{type:Schema.Types.ObjectId, ref : 'extras'},
    idOffer :{type:Schema.Types.ObjectId, ref : 'offers'}
},{ collection: 'candidacys' });




var Candidacy = mongoose.model('Candidacy', candidacySchema,'candidacys');


// export le modèle
module.exports = Candidacy;

// var Offer = require('../models/offer');
// var Extra = require('../models/extra');



// var candidacySchema = Schema ({
//     nameEvenement : [Offer.Schema],
//     last_name: [Extra.Schema],
//     first_name : [Extra.Schema],
//     role : [Offer.Schema],
//     etat : {type : String , default: 'en attente'}
// });
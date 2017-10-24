var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var candidacySchema = Schema ({
    etat: String,
    extra:{type:Schema.Types.ObjectId, ref : 'Extra'},
    offer :{type:Schema.Types.ObjectId, ref : 'Offer'}
});

var Candidacy = mongoose.model('Candidacy', candidacySchema);


// export le modèle
module.exports = Candidacy;

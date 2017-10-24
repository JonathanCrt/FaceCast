var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var extraSchema = Schema ({
    last_name: String,
    first_name: String,
    email: String,

});


var Extra = mongoose.model('Extra', extraSchema);

// export le modèle
module.exports = Extra;
var Candidacy = require('../models/candidacy');

router.get('/candidacy', function(req, res, next) {
  Candidacy.find({}, function(err, currentcandidacy) {
     if (err) throw err;
     res.render('candidacy', { title: 'Candidacy', candidacy: currentcandidacy });
  });
});


module.exports = router;
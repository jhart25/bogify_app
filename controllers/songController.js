const db = require("../models");

// Methods for the SongController//
module.exports = {
    findAll: function(req, res) {
        db.Song
         .find(req.query)
         .sort({ Year: -1 })
         .then(dbModel => res.json(dbModel))
         .catch(err => res.status(400) .json(err));
    },
         findById: function(req, res) {
             db.Song
             .findById(req.params.id)
             .then(dbModel => res.json(dbModel))
             .catch(err => res.status(400).json(err));
         },
 create: function(req, res) {
     db.Song
     .create(req.body)
     .then(dbModel => res.json(dbModel))
     .catch(err => res.status(400) .json(err)); 
 },
 update: function(req, res) {
     db.Song
     .findOneAndUpdate({_id : req.params.id}, req.body)
     .then(dbModel => res.json(dbModel))
     .catch(err => res.status(400) .json(err));
 },
remove: function(req, res) {
    db.Song
    .findById({_id: req.params.id})
    .then(dbModel => dbModel.remove)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(400) .json(err));
}
};

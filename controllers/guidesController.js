const db = require("../models");

// Defining methods for the guidesController
module.exports = {
  findCity: function(req, res) {
    db.Guide
      .find( { location: req.params.location.toLowerCase() } )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findActivity: function(req, res) {
    db.Guide
      .find( { _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};

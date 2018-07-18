const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findCity: function(req, res) {
    db.Guide
      .find( { location: req.params.location } )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

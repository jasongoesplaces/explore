const router = require("express").Router();
const guidesController = require("../../controllers/guidesController");

// Matches with "/api/guides/:location"
router.route("/:location")
  .get(guidesController.findCity)

module.exports = router;

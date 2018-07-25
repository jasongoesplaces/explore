const router = require("express").Router();
const guidesController = require("../../controllers/guidesController");

router.route("/:id")
  .get(guidesController.findActivity)

module.exports = router;
const router = require("express").Router();
const guideRoutes = require("./guides");

// Book routes
router.use("/guides", guideRoutes);

module.exports = router;

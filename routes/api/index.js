const router = require("express").Router();
const guideRoutes = require("./guides");
const activityRoutes = require("./activity")

router.use("/guides", guideRoutes);
router.use("/activity", activityRoutes)

module.exports = router;

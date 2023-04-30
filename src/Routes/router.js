const router=require("express").Router();
const {getTotalRecovered, getTotalActive, getTotalDeath, getHotspotStates, getHealthyStates} = require("../controller/covidController");

router.get("/totalRecovered", getTotalRecovered);
router.get("/totalActive", getTotalActive);
router.get("/totalDeath", getTotalDeath);
router.get("/hotspotStates", getHotspotStates);
router.get("/healthyStates", getHealthyStates);


module.exports = router;
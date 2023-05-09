const express = require("express");
const router = express.Router();
const indicatorsController = require("../controllers/indicatorsController");

router.route("/all-indicators").get(indicatorsController.allIndicators);
router.route("/all-countries").get(indicatorsController.allCountries);
router.route("/country/:countryName").get(indicatorsController.oneCountry);
router.route("/country/:countryName/:group").get(indicatorsController.byGroup);
router.route("/by-indicator/:indicator").get(indicatorsController.byIndicator);

module.exports = router;

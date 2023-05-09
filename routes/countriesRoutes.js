const express = require("express");
const router = express.Router();
const countriesController = require("../controllers/countriesController");

router.route("/:name").get(countriesController.getOne);

module.exports = router;

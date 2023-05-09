const express = require("express");
const app = express();

const indicatorsRouter = require("./routes/indicatorsRoutes");
const countriesRouter = require("./routes/countriesRoutes");

app.use("/api/indicators", indicatorsRouter);
app.use("/api/countries", countriesRouter);

module.exports = app;

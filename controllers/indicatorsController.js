const te = require("tradingeconomics");

exports.allIndicators = async (req, res, next) => {
  try {
    data = await te.getIndicatorData();
    res.status(200).json({ status: "success", data });
  } catch (err) {
    next(new Error(err));
  }
};

exports.allCountries = async (req, res, next) => {
  try {
    data = await te.getAllCountries();
    res.status(200).json({ status: "success", data });
  } catch (err) {
    next(new Error(err));
  }
};

exports.oneCountry = async (req, res, next) => {
  try {
    data = await te.getIndicatorData((country = [req.params.countryName]));
    res.status(200).json({ status: "success", data });
  } catch (err) {
    next(new Error(err));
  }
};
exports.byGroup = async (req, res, next) => {
  try {
    data = await te.getIndicatorData(
      (country = req.params.countryName),
      (group = req.params.group)
    );
    res.status(200).json({ status: "success", data });
  } catch (err) {
    next(new Error(err));
  }
};
exports.byIndicator = async (req, res, next) => {
  try {
    data = await te.getIndicatorData((indicator = req.params.indicator));
    res.status(200).json({ status: "success", data });
  } catch (err) {
    next(new Error(err));
  }
};

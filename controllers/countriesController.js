const fetch = require("node-fetch");

exports.getOne = async (req, res, next) => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${req.params.name}?fields=name,region,population,currencies,flags`
    );
    const data = await response.json();

    res.status(200).json({ status: "success", data });
  } catch (err) {
    next(new Error(err));
  }
};

const app = require("./app");

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const te = require("tradingeconomics");
te.login(process.env.TRADING_KEY);

const port = process.env.PORT;

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

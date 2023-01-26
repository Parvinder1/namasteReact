const dotenv = require("dotenv");
const { NODE_ENV } = process.env;
if (NODE_ENV !== "prod") {
  const configFile = `./.env.${NODE_ENV}`;
  dotenv.config({ path: configFile });
} else {
  dotenv.config();
}
module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGODB_URI,
  APP_SECRET: process.env.APP_SECRET,
};

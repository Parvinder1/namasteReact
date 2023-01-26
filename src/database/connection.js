const mongoose = require("mongoose");
const { DB_URL } = require("../config");

module.exports = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose
      .connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("database connected successfully"));
  } catch (err) {
    console.log("error", err);
  }
};

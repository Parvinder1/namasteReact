const express = require("express");
const app = express();
const { PORT } = require("./config");
const { databaseConnection } = require("./database");

const StartServer = async () => {
  await databaseConnection();

  app
    .listen(PORT, () => {
      console.log("app is running successfully on port", PORT);
    })
    .on("error", (error) => {
      console.log(error);
      process.exit();
    });
};
StartServer();

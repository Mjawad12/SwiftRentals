const db = require("mongoose");

require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

const connectToDb = () => {
  db.connect(process.env.Connection_string)
    .then(() => {
      console.log("Connected to Db");
    })
    .catch((error) => {
      console.log("Can not Connecy to Db" + error);
    });
};

module.exports = connectToDb;

const db = require("mongoose");

const connectToDb = () => {
  db.connect("mongodb://127.0.0.1:27017/SwiftRentals")
    .then(() => {
      console.log("Connected to Db");
    })
    .catch((error) => {
      console.log("Can not Connecy to Db" + error);
    });
};

module.exports = connectToDb;

const db = require("mongoose");

const connectToDb = () => {
  db.connect(
    "mongodb+srv://SwiftRentals_Main:RentalSwift156jaw@swiftrentals.pm3mdfi.mongodb.net/SwiftRentals"
  )
    .then(() => {
      console.log("Connected to Db");
    })
    .catch((error) => {
      console.log("Can not Connecy to Db" + error);
    });
};

module.exports = connectToDb;

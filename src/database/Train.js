// In src/database/Train.js
const DB = require("./db.json");

const getAllTrains = () => {
  return DB.trains;
  console.log(DB);
};

module.exports = { getAllTrains };

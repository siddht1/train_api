// In src/database/Train.js
const DB = require("./db.json");

const getAllTrains = () => {
  return DB.Trains;
};

module.exports = { getAllTrains };

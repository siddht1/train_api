// In src/database/TrainService.js
// *** ADD ***
const Train = require("../database/train");
const getAllTrains = () => {
  // *** ADD ***
  const allTrains = Train.getAllTrains();
  // *** ADD ***
  return allTrains;
};

const getOneTrain = () => {
  return;
};

const createNewTrain = () => {
  return;
};

const updateOneTrain = () => {
  return;
};

const deleteOneTrain = () => {
  return;
};

module.exports = {
  getAllTrains,
  getOneTrain,
  createNewTrain,
  updateOneTrain,
  deleteOneTrain,
};

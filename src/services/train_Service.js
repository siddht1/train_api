// In src/services/train_Service.js
const Train=require("../database/Train")
const getAllTrains = () => {
  const allTrains=Train.getAllTrains();
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

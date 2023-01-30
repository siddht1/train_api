// In src/controllers/TrainControllers.js
const trainService = require("../services/trainService");

const getAllTrains = (req, res) => {
  const allTrains = trainService.getAllTrains();
  // *** ADD ***
  res.send({ status: "OK", data: allTrains });
};

const getOneTrain = (req, res) => {
  const Train = trainService.getOneTrain();
  res.send("Get an existing Train");
};

const createNewTrain = (req, res) => {
  const createdTrain = trainService.createNewTrain();
  res.send("Create a new Train");
};

const updateOneTrain = (req, res) => {
  const updatedTrain = trainService.updateOneTrain();
  res.send("Update an existing Train");
};

const deleteOneTrain = (req, res) => {
  trainService.deleteOneTrain();
  res.send("Delete an existing Train");
};

module.exports = {
  getAllTrains,
  getOneTrain,
  createNewTrain,
  updateOneTrain,
  deleteOneTrain,
};

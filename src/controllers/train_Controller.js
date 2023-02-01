// In src/controllers/train_Controller.js
const train_Service = require("../services/train_Service");
const getAllTrains = (req, res) => {
  const allTrains=train_Service.getAllTrains();
   res.send({ status: "OK",data:allTrains});
};

const getOneTrain = (req, res) => {
  const train=train_Service.getOneTrain();
  res.send("Get an existing train ");
};

const createNewTrain = (req, res) => {
  const created_train=train_Service.createNewTrain();
  res.send("Create a new train");
};

const updateOneTrain = (req, res) => {
  const updated_train=train_Service.updateOneTrain();
  res.send("Update an existing train");
};

const deleteOneTrain = (req, res) => {
  train_Service.deleteOneTrain();
  res.send("Delete an existing train");
};

module.exports = {
  getAllTrains,
  getOneTrain,
  createNewTrain,
  updateOneTrain,
  deleteOneTrain,
};

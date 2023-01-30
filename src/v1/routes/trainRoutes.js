// In src/v1/routes/TrainRoutes.js
const express = require("express");

// added Train controller
const trainController = require("../../controllers/trainController");
const router = express.Router();


router.get("/", trainController.getAllTrains);

router.get("/:trainId", trainController.getOneTrain);

router.post("/", trainController.createNewTrain);

router.patch("/:TrainId", trainController.updateOneTrain);

router.delete("/:TrainId", trainController.deleteOneTrain);

module.exports = router;

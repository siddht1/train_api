// In src/v1/routes/train_routes.js
const express = require("express");
const train_Controller = require("../../controllers/train_Controller");
const router = express.Router();
const cors = require('cors');

// Enable CORS for all routes
router.use(cors());
router.get("/", train_Controller.getAllTrains);

router.get("/:traintId", train_Controller.getOneTrain);

router.post("/", train_Controller.createNewTrain);

router.patch("/:trainId", train_Controller.updateOneTrain);

router.delete("/:trainId", train_Controller.deleteOneTrain);
module.exports = router;

// In src/v1/routes/train_routes.js
const express = require("express");
const train_Controller = require("../../controllers/train_Controller");
const router = express.Router();

 res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )


router.get("/", train_Controller.getAllTrains);

router.get("/:traintId", train_Controller.getOneTrain);

router.post("/", train_Controller.createNewTrain);

router.patch("/:trainId", train_Controller.updateOneTrain);

router.delete("/:trainId", train_Controller.deleteOneTrain);
module.exports = router;

// In src/index.js
const express = require("express");
// *** REMOVE ***
const v1Router = require("./v1/routes");
// *** ADD ***
const v1TrainsRouter = require("./v1/routes/train_routes");

const app = express();
const PORT = process.env.PORT || 3000;

// *** REMOVE ***
app.use("/api/v1", v1Router);

// *** ADD ***
app.use("/api/v1/trains", v1TrainsRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});

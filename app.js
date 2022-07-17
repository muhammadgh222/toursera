const express = require("express");
const tourRoutes = require("./routes/tourRoutes");
const app = express();

app.use(express.json());

// Routes middlewares
app.use("/api/v1/tours", tourRoutes);

module.exports = app;

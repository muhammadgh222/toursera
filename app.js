const express = require("express");
const AppError = require("./middlewares/AppError");
const tourRoutes = require("./routes/tourRoutes");
const globalErrorHandler = require("./controllers/errorController");
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

// Routes middlewares
app.use("/api/v1/tours", tourRoutes);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;

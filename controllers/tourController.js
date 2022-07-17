const Tour = require("./../models/tourModel");

// Create New Tour

const createTour = async (req, res) => {
  try {
    const newTour = req.body;

    const tour = await Tour.create(newTour);

    if (tour) {
      res.status(201).json({
        status: "success",
        data: {
          tour,
        },
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

// Get tour based on id

const getTour = async (req, res) => {
  try {
    const id = req.params.id;
    const tour = await Tour.find({ _id: id });

    if (tour) {
      res.status(200).json({
        status: "success",
        tour,
      });
    } else {
      res.status(404).json({
        status: "fail",
        message: "Tour not found",
      });
    }
  } catch (error) {
    res.status(404).json({
      status: "fail",
      error,
    });
  }
};
const updateTour = async (req, res) => {
  try {
    const id = req.params.id;
    const tour = await Tour.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (tour) {
      res.status(200).json({
        status: "success",
        tour,
      });
    }
  } catch (error) {
    res.status(404).json({
      status: "fail",
      error,
    });
  }
};

const deleteTour = async (req, res) => {
  try {
    const id = req.params.id;
    const tour = await Tour.findByIdAndDelete(id);

    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      error,
    });
  }
};

module.exports = { createTour, getTour, updateTour, deleteTour };

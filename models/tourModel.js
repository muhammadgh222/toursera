const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A tour must have a name"],
    trim: true,
    unique: true,
    maxLength: [40, "A tour name cannot be longer than 40 character"],
    minLength: [10, "A tour name cannot be less than 10 character"],
  },
  duration: {
    type: String,
    required: [true, "A tour must have a duration"],
  },
  maxGroupSize: {
    type: Number,
    required: [true, "A tour must have a max group size"],
  },
  difficulty: {
    type: String,
    enum: {
      values: ["easy", "medium", "difficult"],
      message: "Difficulty must be either easy, medium or hard",
    },
    required: [true, "A tour must have a difficulty"],
  },
  startDates: [Date],
  ratingsAverage: {
    type: Number,
    default: 4.5,
    min: [1, "Rating must be above 1.0"],
    max: [5, "Rating must be below 5.0"],
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, "A tour must have a price"],
  },
  priceDiscount: {
    type: Number,
  },
  summary: {
    type: String,
    required: [true, "A tour must have a summary"],
  },
  description: {
    type: String,
  },
  imageCover: {
    type: String,
    required: true,
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  secretTour: {
    type: Boolean,
    default: false,
  },
});

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;

const express = require("express");
const {
  createTour,
  getTour,
  updateTour,
  deleteTour,
} = require("../controllers/tourController");

const router = express.Router();

router.route("/").post(createTour);
router.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;

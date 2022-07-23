const express = require("express");
const {
  createTour,
  getTour,
  updateTour,
  deleteTour,
  getAllTours,
  aliasTopTours,
  getTourStats,
  getMonthlyPlan,
} = require("../controllers/tourController");

const router = express.Router();

router.route("/tour-stats").get(getTourStats);
router.route("/monthly-plan/:year").get(getMonthlyPlan);
router.route("/").post(createTour).get(getAllTours);
router.route("/top-5-cheap").get(aliasTopTours, getAllTours);
router.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;

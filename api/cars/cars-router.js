const express = require("express");
const {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
} = require("./cars-middleware");
const Cars = require("./cars-model");

const router = express.Router();

router.get("/", (req, res, next) => {
  Cars.getAll()
    .then((cars) => {
      res.json(cars);
    })
    .catch(next);
});

router.get("/:id", checkCarId, (req, res) => {
  res.json(req.car);
});

router.post(
  "/",
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
  (req, res, next) => {
    Cars.create(req.body)
      .then((newCar) => {
        res.status(201).json(newCar);
      })
      .catch(next);
  }
);

module.exports = router;

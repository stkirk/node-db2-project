const express = require("express");
const { checkCarId } = require("./cars-middleware");
const Cars = require("./cars-model");

const router = express.Router();

router.get("/", (req, res, next) => {
  Cars.getAll()
    .then((cars) => {
      res.json(cars);
    })
    .catch(next);
});

router.get("/:id", checkCarId, (req, res, next) => {
  res.json(req.car);
});

router.post("/", (req, res, next) => {
  res.send("POST car working...");
});

module.exports = router;

const express = require("express");
const Cars = require("./cars-model");

const router = express.Router();

router.get("/", (req, res, next) => {
  Cars.getAll()
    .then((cars) => {
      res.json(cars);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  res.send("GET cars by ID working...");
});

router.post("/", (req, res, next) => {
  res.send("POST car working...");
});

module.exports = router;

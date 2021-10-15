// DO YOUR MAGIC
const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("GET cars working...");
});

router.get("/:id", (req, res, next) => {
  res.send("GET cars by ID working...");
});

router.post("/", (req, res, next) => {
  res.send("POST car working...");
});

module.exports = router;

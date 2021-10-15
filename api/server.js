const express = require("express");
const carsRouter = require("./cars/cars-router");

const server = express();

// DO YOUR MAGIC
server.use(express.json());

server.use("/api/cars", carsRouter);

server.get("/", (req, res, next) => {
  res.send(`
        <h1>Welcome to Cars API</h1>
        <h4>Use: /api/cars</h4>
    `);
});

server.use("*", (req, res) => {
  res.status(404).json({ message: "not found" });
});

//error handling middleware
server.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || "Something went wrong" });
});

module.exports = server;

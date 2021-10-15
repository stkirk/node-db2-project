const Cars = require("../cars/cars-model");
const db = require("../../data/db-config");

const checkCarId = (req, res, next) => {
  const { id } = req.params;
  Cars.getById(id)
    .then((car) => {
      if (!car) {
        next({ status: 404, message: `car with id ${id} is not found` });
      } else {
        req.car = car;
        next();
      }
    })
    .catch(next);
};

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
};

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
};

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
};

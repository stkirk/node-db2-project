const db = require("../../data/db-config");

const checkCarId = (req, res, next) => {
  const { id } = req.params;
  db("cars")
    .where({ id: id })
    .then((car) => {
      if (!car) {
        next({ status: 404, message: `car with id ${id} is not found` });
      } else {
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

const Cars = require("../cars/cars-model");
const db = require("../../data/db-config");
const vinValidator = require("vin-validator");

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
  const { vin, make, model, mileage } = req.body;
  if (!vin || !make || !model || !mileage) {
    const requiredFields = [
      { name: "vin", exists: vin },
      { name: "make", exists: make },
      { name: "model", exists: model },
      { name: "mileage", exists: mileage },
    ];
    const errStringArray = requiredFields.filter((field) => !field.exists);
    console.log("errStringArray --> ", errStringArray);
    next({ status: 400, message: `${errStringArray[0].name} is missing` });
  } else if (typeof mileage !== "number") {
    next({ status: 400, message: "mileage must be a number" });
  } else {
    next();
  }
};

const checkVinNumberValid = (req, res, next) => {
  const isValidVin = vinValidator.validate(req.body.vin);
  if (!isValidVin) {
    next({ status: 400, message: `vin ${req.body.vin} is invalid` });
  } else {
    next();
  }
};

const checkVinNumberUnique = async (req, res, next) => {
  const vinCopy = await db("cars").where({ vin: req.body.vin }).first();
  if (vinCopy) {
    next({ status: 400, message: `vin ${req.body.vin} already exists` });
  } else {
    next();
  }
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
};

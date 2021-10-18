const db = require("../../data/db-config");

const getAll = () => {
  return db("cars");
};

const getById = (id) => {
  return db("cars").where({ id: id }).first();
};

const create = async (payload) => {
  const [id] = await db("cars").insert(payload);
  const newCar = await getById(id);
  // console.log("new car ---> ", newCar);
  return newCar;
};

const getByVin = async (vin) => {
  return db("cars").where({ vin: vin }).first();
};

module.exports = {
  getAll,
  getById,
  create,
  getByVin,
};

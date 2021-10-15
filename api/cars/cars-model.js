const db = require("../../data/db-config");

const getAll = () => {
  return db("cars");
};

const getById = (id) => {
  return db("cars").where({ id: id }).first();
};

const create = async (payload) => {
  const [id] = await db("cars").insert(payload);
  return getById(id);
};

module.exports = {
  getAll,
  getById,
  create,
};

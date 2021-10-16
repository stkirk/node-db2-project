// STRETCH
exports.seed = function (knex) {
  return knex("cars")
    .truncate()
    .then(function () {
      return knex("cars").insert([
        {
          vin: "1D7HA18N38J191236",
          make: "Ford",
          model: "GT40",
          mileage: 16879,
          title: "clean",
          transmission: "manual",
        },
        {
          vin: "5XYZUDLB7DG006717",
          make: "Ferrari",
          model: "F40",
          mileage: 5784,
          title: "clean",
          transmission: "sequential",
        },
        {
          vin: "WBAKF9C52BE619303",
          make: "Aston Martin",
          model: "DB5",
          mileage: 105648,
          title: "dirty",
          transmission: "manual",
        },
      ]);
    });
};

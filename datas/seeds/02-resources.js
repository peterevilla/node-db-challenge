exports.seed = function (knex) {
  return knex("resources").insert([
    {
      name: "Laptop",
      description: "MacBook Pro",
      project_id: 1,
    },
  ]);
};

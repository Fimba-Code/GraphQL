const { Model } = require("objection");
const Knex = require("knex");

module.exports = () => {
  // Initialize knex.
  const knex = Knex({
    client: "mysql2",

    useNullAsDefault: true,
    connection: {
      host: "127.0.0.1",
      port: 3307,
      user: "root",
      password: "",
      database: "masterClass",
    },
  });

  // Give the knex instance to objection.
  Model.knex(knex);
};

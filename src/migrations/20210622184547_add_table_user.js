exports.up = async function (knex) {
  await knex.schema.createTable("users", (t) => {
    t.increments("id").primary();
    t.string("first_name", 100);
    t.string("last_name", 100);
    t.string("email").unique();
    t.integer("year");
    t.json("settings");
    t.timestamps(true, true);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable("users");
};

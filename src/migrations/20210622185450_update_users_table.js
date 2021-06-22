exports.up = async function (knex) {
  await knex
    .insert({
      first_name: "admin",
      last_name: "admin",
      email: "admin@admin.com",
    })
    .into("users");
};

exports.down = async function (knex) {
  await knex.delete().where({email: "admin@admin.com"});
};

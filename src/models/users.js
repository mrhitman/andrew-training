const {Model} = require("objection");

class User extends Model {
  static tableName = "users";
  id;
  first_name;
  last_name;
  email;
}

module.exports = {User};

const express = require("express");
const {logger} = require("./utils");
const dotenv = require("dotenv");
const {Model} = require("objection");
const dbConfig = require("./knexfile");
const Knex = require("knex");
const {User} = require("./models/users");

function createApp() {
  const app = express();
  Model.knex(Knex(dbConfig));

  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );

  app.use(logger);
  app.get("/", async (req, res) => {
    const users = await User.query().where({email: "admin@admin.com"});
    res.json(users);
  });

  return app;
}

if (!module.parent) {
  const app = createApp();
  dotenv.config();
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server up on http://localhost:${PORT}`));
}

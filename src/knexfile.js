module.exports = {
  client: "postgres",
  connection: {
    host: "localhost",
    user: "root",
    password: "1",
    database: "testdb",
  },
  timezone: "UTC",
  charset: "utf8",
  debug: true,
  migrations: {
    directory: "migrations",
    tableName: "migrations",
  },
  seeds: {
    directory: "seeds",
  },
};

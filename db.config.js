const { createConnection } = require("mysql");

const pool = createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  port: "3306",
  database: "NEXTIA",
});

module.exports = pool;

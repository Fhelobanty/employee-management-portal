const { Pool } = require("pg");

const pool = new Pool({
  user: "admin",
  host: "host.docker.internal",
  database: "employee_db",
  password: "admin123",
  port: 5432,
});

module.exports = pool;
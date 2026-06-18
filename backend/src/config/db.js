const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: process.env.NODE_ENV === "production"
  ? {
      rejectUnauthorized: false,
    }
  : false,
});

async function initializeDatabase() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS departments (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL
      );
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS employees (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        department VARCHAR(255) NOT NULL,
        position VARCHAR(255) NOT NULL,
        status VARCHAR(100) NOT NULL
      );
    `);

    console.log("DATABASE TABLES VERIFIED");
  } catch (err) {
    console.error("DATABASE INITIALIZATION FAILED");
    console.error(err);
  }
}

pool
  .query("SELECT NOW()")
  .then(async () => {
    console.log("DATABASE CONNECTED SUCCESSFULLY");
    await initializeDatabase();
  })
  .catch((err) => {
    console.error("DATABASE CONNECTION FAILED");
    console.error(err);
  });

module.exports = pool;
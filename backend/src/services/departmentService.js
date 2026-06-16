const pool = require("../config/db");

async function getDepartments() {
  const result = await pool.query(
    "SELECT * FROM departments ORDER BY id"
  );

  return result.rows;
}

async function createDepartment(name) {
  const result = await pool.query(
    `
      INSERT INTO departments(name)
      VALUES($1)
      RETURNING *
    `,
    [name]
  );

  return result.rows[0];
}

module.exports = {
  getDepartments,
  createDepartment,
};
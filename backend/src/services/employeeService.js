const pool = require("../config/db");

async function getEmployees() {
  const result = await pool.query(
    "SELECT * FROM employees ORDER BY id"
  );

  return result.rows;
}

async function createEmployee(employee) {
  const result = await pool.query(
    `
      INSERT INTO employees
      (name, department, position, status)
      VALUES ($1,$2,$3,$4)
      RETURNING *
    `,
    [
      employee.name,
      employee.department,
      employee.position,
      employee.status,
    ]
  );

  return result.rows[0];
}

async function deleteEmployee(id) {
  await pool.query(
    "DELETE FROM employees WHERE id = $1",
    [id]
  );

  return true;
}

async function updateEmployee(id, employee) {
  const result = await pool.query(
    `
    UPDATE employees
    SET
      name = $1,
      department = $2,
      position = $3,
      status = $4
    WHERE id = $5
    RETURNING *
    `,
    [
      employee.name,
      employee.department,
      employee.position,
      employee.status,
      id,
    ]
  );

  return result.rows[0];
}

module.exports = {
  getEmployees,
  createEmployee,
  deleteEmployee,
  updateEmployee,
};
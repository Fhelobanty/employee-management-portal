const employeeService = require("../services/employeeService");

async function getEmployees(req, res) {
  try {
    const employees = await employeeService.getEmployees();

    res.json(employees);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch employees",
    });
  }
}

async function createEmployee(req, res) {
  try {
    const employee =
      await employeeService.createEmployee(req.body);

    res.status(201).json(employee);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to create employee",
    });
  }
}

async function deleteEmployee(req, res) {
  try {
    await employeeService.deleteEmployee(
      req.params.id
    );

    res.json({
      message: "Employee Deleted",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to delete employee",
    });
  }
}
async function updateEmployee(req, res) {
  try {
    const employee =
      await employeeService.updateEmployee(
        req.params.id,
        req.body
      );

    res.json(employee);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to update employee",
    });
  }
}

module.exports = {
  getEmployees,
  createEmployee,
  deleteEmployee,
  updateEmployee,
};
const departmentService =
  require("../services/departmentService");

async function getDepartments(req, res) {
  try {
    const departments =
      await departmentService.getDepartments();

    res.json(departments);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch departments",
    });
  }
}

async function createDepartment(req, res) {
  try {
    const department =
      await departmentService.createDepartment(
        req.body.name
      );

    res.status(201).json(department);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to create department",
    });
  }
}

module.exports = {
  getDepartments,
  createDepartment,
};
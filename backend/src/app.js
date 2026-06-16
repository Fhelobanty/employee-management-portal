require("dotenv").config();

const express = require("express");
const cors = require("cors");

const employeeRoutes = require("./routes/employeeRoutes");
const departmentRoutes = require("./routes/departmentRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/employees", employeeRoutes);

app.use("/api/departments", departmentRoutes);

module.exports = app;
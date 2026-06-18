import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import API_URL from "../services/api";
import DashboardCards from "../components/DashboardCards";
import EmployeeAnalytics from "../components/EmployeeAnalytics";

function Dashboard() {
  const [employees, setEmployees] =
    useState([]);

  const [departments, setDepartments] =
    useState([]);

  useEffect(() => {
    loadEmployees();
    loadDepartments();
  }, []);

  async function loadEmployees() {
    try {
      const response = await fetch(
        `${API_URL}/api/employees`
      );

      const data =
        await response.json();

      setEmployees(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function loadDepartments() {
    try {
      const response = await fetch(
        `${API_URL}/api/departments`
      );

      const data =
        await response.json();

      setDepartments(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div
        style={{
          padding: "30px",
          flex: 1,
          backgroundColor: "#f0fdf4",
          minHeight: "100vh",
        }}
      >
        <h1
          style={{
            color: "#14532d",
          }}
        >
          Employee Management Portal
        </h1>

        <h2
          style={{
            color: "#166534",
          }}
        >
          Dashboard Overview
        </h2>

        <DashboardCards
          employees={employees}
          departments={departments}
        />

        <EmployeeAnalytics
          employees={employees}
        />
      </div>
    </div>
  );
}

export default Dashboard;
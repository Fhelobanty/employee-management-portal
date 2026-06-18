import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import EmployeeSearch from "../components/EmployeeSearch";
import EmployeeTable from "../components/EmployeeTable";
import AddEmployeeForm from "../components/AddEmployeeForm";
import DashboardCards from "../components/DashboardCards";
import API_URL from "../services/api";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchEmployees();
  }, []);

  async function fetchEmployees() {
    try {
      const response = await fetch(
        `${API_URL}/api/employees`
      );

      const data = await response.json();

      setEmployees(data);
    } catch (error) {
      console.error(
        "Failed to load employees",
        error
      );
    }
  }

  async function deleteEmployee(id) {
    const confirmed = window.confirm(
      "Delete this employee?"
    );

    if (!confirmed) return;

    try {
      await fetch(
        `${API_URL}/api/employees/${id}`,
        {
          method: "DELETE",
        }
      );

      fetchEmployees();
    } catch (error) {
      console.error(
        "Delete failed",
        error
      );
    }
  }

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      employee.department
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      employee.position
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div
        style={{
          padding: "30px",
          width: "100%",
        }}
      >
        <h1
          style={{
            color: "#4ade80",
          }}
        >
          Employee Management Portal
        </h1>

        <DashboardCards
          employees={employees}
        />

        <EmployeeSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <AddEmployeeForm />

        <EmployeeTable
          employees={filteredEmployees}
          onDelete={deleteEmployee}
        />
      </div>
    </div>
  );
}

export default Employees;
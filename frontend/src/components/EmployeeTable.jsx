import { useState } from "react";
import EditEmployeeModal from "./EditEmployeeModal";

function EmployeeTable({
  employees,
  onDelete,
}) {
  const [selectedEmployee, setSelectedEmployee] =
    useState(null);

  return (
    <div
      style={{
        marginTop: "30px",
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow:
            "0 4px 15px rgba(0,0,0,0.15)",
        }}
      >
        <thead>
          <tr
            style={{
              backgroundColor: "#14532d",
              color: "white",
            }}
          >
            <th style={{ padding: "14px" }}>
              ID
            </th>

            <th style={{ padding: "14px" }}>
              Name
            </th>

            <th style={{ padding: "14px" }}>
              Department
            </th>

            <th style={{ padding: "14px" }}>
              Position
            </th>

            <th style={{ padding: "14px" }}>
              Status
            </th>

            <th style={{ padding: "14px" }}>
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td
                style={{
                  padding: "12px",
                  border: "1px solid #ddd",
                }}
              >
                {employee.id}
              </td>

              <td
                style={{
                  padding: "12px",
                  border: "1px solid #ddd",
                }}
              >
                {employee.name}
              </td>

              <td
                style={{
                  padding: "12px",
                  border: "1px solid #ddd",
                }}
              >
                {employee.department}
              </td>

              <td
                style={{
                  padding: "12px",
                  border: "1px solid #ddd",
                }}
              >
                {employee.position}
              </td>

              <td
                style={{
                  padding: "12px",
                  border: "1px solid #ddd",
                }}
              >
                <span
                  style={{
                    background:
                      employee.status ===
                      "Active"
                        ? "#16a34a"
                        : "#dc2626",
                    color: "white",
                    padding: "6px 12px",
                    borderRadius: "20px",
                    fontSize: "12px",
                  }}
                >
                  {employee.status}
                </span>
              </td>

              <td
                style={{
                  padding: "12px",
                  border: "1px solid #ddd",
                }}
              >
                <button
                  onClick={() =>
                    setSelectedEmployee(
                      employee
                    )
                  }
                  style={{
                    background: "#16a34a",
                    color: "white",
                    border: "none",
                    padding: "8px 14px",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    onDelete(employee.id)
                  }
                  style={{
                    background: "#dc2626",
                    color: "white",
                    border: "none",
                    padding: "8px 14px",
                    borderRadius: "6px",
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div
        style={{
          marginTop: "15px",
          color: "#94a3b8",
          fontWeight: "bold",
        }}
      >
        Total Employees: {employees.length}
      </div>

      {selectedEmployee && (
        <EditEmployeeModal
          employee={selectedEmployee}
          onClose={() =>
            setSelectedEmployee(null)
          }
          onUpdate={() => {
            setSelectedEmployee(null);
            window.location.reload();
          }}
        />
      )}
    </div>
  );
}

export default EmployeeTable;
import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import AddDepartmentForm from "../components/AddDepartmentForm";
import DepartmentCards from "../components/DepartmentCards";
import DepartmentSearch from "../components/DepartmentSearch";

function Departments() {
  const [departments, setDepartments] =
    useState([]);

  const [searchTerm, setSearchTerm] =
    useState("");

  useEffect(() => {
    loadDepartments();
  }, []);

  async function loadDepartments() {
    const response = await fetch(
      "http://localhost:5000/api/departments"
    );

    const data = await response.json();

    setDepartments(data);
  }

  const filteredDepartments =
    departments.filter(
      (department) =>
        department.name
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )
    );

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Sidebar />

      <div
        style={{
          padding: "30px",
          width: "100%",
        }}
      >
        <div
  style={{
    marginBottom: "30px",
  }}
>
  <h1
    style={{
      color: "#4ade80",
      marginBottom: "10px",
    }}
  >
    Departments
  </h1>

  <p
    style={{
      color: "#cbd5e1",
    }}
  >
    Manage company departments
    and organizational structure.
  </p>
</div>

        <DepartmentCards
          departments={departments}
        />

        <DepartmentSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <AddDepartmentForm
          onDepartmentAdded={
            loadDepartments
          }
        />

        <table
          style={{
            width: "100%",
            marginTop: "30px",
            borderCollapse:
              "collapse",
            backgroundColor:
              "#ffffff",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor:
                  "#1e293b",
                color: "white",
              }}
            >
              <th
                style={{
                  padding: "12px",
                }}
              >
                ID
              </th>

              <th
                style={{
                  padding: "12px",
                }}
              >
                Department Name
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredDepartments.length >
            0 ? (
              filteredDepartments.map(
                (
                  department
                ) => (
                  <tr
                    key={
                      department.id
                    }
                  >
                    <td
                      style={{
                        padding:
                          "10px",
                        border:
                          "1px solid #ddd",
                      }}
                    >
                      {
                        department.id
                      }
                    </td>

                    <td
                      style={{
                        padding:
                          "10px",
                        border:
                          "1px solid #ddd",
                      }}
                    >
                      {
                        department.name
                      }
                    </td>
                  </tr>
                )
              )
            ) : (
              <tr>
                <td
                  colSpan="2"
                  style={{
                    padding:
                      "20px",
                    textAlign:
                      "center",
                  }}
                >
                  No departments
                  found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Departments;
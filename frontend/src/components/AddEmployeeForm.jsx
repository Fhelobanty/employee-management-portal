import { useEffect, useState } from "react";

import API_URL from "../services/api";
function AddEmployeeForm() {
  const [departments, setDepartments] =
    useState([]);

  const [formData, setFormData] =
    useState({
      name: "",
      department: "",
      position: "",
      status: "Active",
    });

  useEffect(() => {
    loadDepartments();
  }, []);

  async function loadDepartments() {
    try {
      const response = await fetch(
        `${API_URL}/api/departments`
      );

      const data =
        await response.json();

      setDepartments(data);
    } catch (error) {
      console.error(
        "Failed to load departments",
        error
      );
    }
  }

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]:
        event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch(
  `${API_URL}/api/employees`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  }
);

    if (response.ok) {
      alert(
        "Employee Added Successfully"
      );

      window.location.reload();
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "#0f2f23",
        padding: "20px",
        borderRadius: "12px",
        marginBottom: "30px",
        border:
          "1px solid #22c55e",
      }}
    >
      <h2
        style={{
          color: "#86efac",
        }}
      >
        Add Employee
      </h2>

      <input
        type="text"
        name="name"
        placeholder="Employee Name"
        onChange={handleChange}
        required
        style={{
          width: "300px",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <br />

      <select
        name="department"
        value={formData.department}
        onChange={handleChange}
        required
        style={{
          width: "320px",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        <option value="">
          Select Department
        </option>

        {departments.map(
          (department) => (
            <option
              key={department.id}
              value={department.name}
            >
              {department.name}
            </option>
          )
        )}
      </select>

      <br />

      <input
        type="text"
        name="position"
        placeholder="Position"
        onChange={handleChange}
        required
        style={{
          width: "300px",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <br />

      <button
        type="submit"
        style={{
          background: "#22c55e",
          color: "white",
          border: "none",
          padding:
            "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Add Employee
      </button>
    </form>
  );
}

export default AddEmployeeForm;
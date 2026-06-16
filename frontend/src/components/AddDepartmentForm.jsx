import { useState } from "react";

function AddDepartmentForm({ onDepartmentAdded }) {
  const [departmentName, setDepartmentName] =
    useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (!departmentName.trim()) {
      return;
    }

    const response = await fetch(
      "http://localhost:5000/api/departments",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          name: departmentName,
        }),
      }
    );

    if (response.ok) {
      setDepartmentName("");

      onDepartmentAdded();
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: "30px",
      }}
    >
      <h2>Add Department</h2>

      <input
        type="text"
        placeholder="Department Name"
        value={departmentName}
        onChange={(e) =>
          setDepartmentName(e.target.value)
        }
        style={{
          padding: "10px",
          width: "300px",
        }}
      />

      <button
        type="submit"
        style={{
          marginLeft: "10px",
          padding: "10px 20px",
        }}
      >
        Add
      </button>
    </form>
  );
}

export default AddDepartmentForm;
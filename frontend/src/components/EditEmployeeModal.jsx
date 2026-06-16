import { useEffect, useState } from "react";

function EditEmployeeModal({
  employee,
  onClose,
  onUpdate,
}) {
  const [departments, setDepartments] =
    useState([]);

  const [formData, setFormData] =
    useState({
      name: employee.name,
      department:
        employee.department,
      position:
        employee.position,
      status: employee.status,
    });

  useEffect(() => {
    loadDepartments();
  }, []);

  async function loadDepartments() {
    try {
      const response = await fetch(
        "http://localhost:5000/api/departments"
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

    await fetch(
      `http://localhost:5000/api/employees/${employee.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(
          formData
        ),
      }
    );

    onUpdate();
    onClose();
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background:
          "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent:
          "center",
        alignItems: "center",
        zIndex: 999,
      }}
    >
      <div
        style={{
          background: "#0f2f23",
          padding: "30px",
          width: "500px",
          borderRadius: "12px",
          border:
            "1px solid #22c55e",
        }}
      >
        <h2
          style={{
            color: "#86efac",
          }}
        >
          Edit Employee
        </h2>

        <form
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={
              handleChange
            }
            style={{
              width: "100%",
              padding: "10px",
            }}
          />

          <br />
          <br />

          <select
            name="department"
            value={
              formData.department
            }
            onChange={
              handleChange
            }
            style={{
              width: "100%",
              padding: "10px",
            }}
          >
            {departments.map(
              (department) => (
                <option
                  key={
                    department.id
                  }
                  value={
                    department.name
                  }
                >
                  {
                    department.name
                  }
                </option>
              )
            )}
          </select>

          <br />
          <br />

          <input
            type="text"
            name="position"
            value={
              formData.position
            }
            onChange={
              handleChange
            }
            style={{
              width: "100%",
              padding: "10px",
            }}
          />

          <br />
          <br />

          <select
            name="status"
            value={
              formData.status
            }
            onChange={
              handleChange
            }
            style={{
              width: "100%",
              padding: "10px",
            }}
          >
            <option value="Active">
              Active
            </option>

            <option value="Inactive">
              Inactive
            </option>
          </select>

          <br />
          <br />

          <button
            type="submit"
            style={{
              background:
                "#22c55e",
              color: "white",
              border: "none",
              padding:
                "10px 20px",
              borderRadius:
                "8px",
              cursor:
                "pointer",
            }}
          >
            Save Changes
          </button>

          <button
            type="button"
            onClick={onClose}
            style={{
              marginLeft:
                "10px",
              padding:
                "10px 20px",
              cursor:
                "pointer",
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditEmployeeModal;
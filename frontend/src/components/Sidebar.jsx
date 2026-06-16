import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        minHeight: "100vh",
        background: "#0b2e22",
        color: "white",
        padding: "25px",
        borderRight: "1px solid #14532d",
      }}
    >
      <h2
        style={{
          marginBottom: "40px",
          color: "#4ade80",
        }}
      >
        EMP Portal
      </h2>

      <ul
        style={{
          listStyle: "none",
        }}
      >
        <li style={{ marginBottom: "20px" }}>
          <Link
            to="/"
            style={{
              color: "white",
            }}
          >
            Dashboard
          </Link>
        </li>

        <li style={{ marginBottom: "20px" }}>
          <Link
            to="/employees"
            style={{
              color: "white",
            }}
          >
            Employees
          </Link>
        </li>

        <li style={{ marginBottom: "20px" }}>
          <Link
            to="/departments"
            style={{
              color: "white",
            }}
          >
            Departments
          </Link>
        </li>

        <li style={{ marginBottom: "20px" }}>
          <Link
            to="/reports"
            style={{
              color: "white",
            }}
          >
            Reports
          </Link>
        </li>

        <li>
          <Link
            to="/settings"
            style={{
              color: "white",
            }}
          >
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
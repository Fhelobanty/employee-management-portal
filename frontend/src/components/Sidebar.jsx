import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        backgroundColor: "#1e293b",
        color: "white",
        padding: "20px",
      }}
    >
      <h2>EMP Portal</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ marginBottom: "15px" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Dashboard
          </Link>
        </li>

        <li style={{ marginBottom: "15px" }}>
          <Link
            to="/employees"
            style={{ color: "white", textDecoration: "none" }}
          >
            Employees
          </Link>
        </li>

        <li style={{ marginBottom: "15px" }}>
          <Link
            to="/departments"
            style={{ color: "white", textDecoration: "none" }}
          >
            Departments
          </Link>
        </li>

        <li style={{ marginBottom: "15px" }}>
          <Link
            to="/reports"
            style={{ color: "white", textDecoration: "none" }}
          >
            Reports
          </Link>
        </li>

        <li>
          <Link
            to="/settings"
            style={{ color: "white", textDecoration: "none" }}
          >
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
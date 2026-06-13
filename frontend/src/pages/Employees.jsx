import Sidebar from "../components/Sidebar";
import EmployeeTable from "../components/EmployeeTable";

function Employees() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div
        style={{
          padding: "30px",
          width: "100%",
        }}
      >
        <h1>Employee Management</h1>

        <p>Manage employee records and information.</p>

        <EmployeeTable />
      </div>
    </div>
  );
}

export default Employees;
import Sidebar from "../components/Sidebar";
import EmployeeStats from "../components/EmployeeStats";
import EmployeeSearch from "../components/EmployeeSearch";
import EmployeeTable from "../components/EmployeeTable";

function Employees() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ padding: "30px", width: "100%" }}>
        <h1>Employee Management</h1>

        <EmployeeStats />

        <EmployeeSearch />

        <EmployeeTable />
      </div>
    </div>
  );
}

export default Employees;
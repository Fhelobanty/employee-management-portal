import employees from "../data/employees";

function EmployeeTable() {
  return (
    <table
      border="1"
      cellPadding="10"
      style={{
        borderCollapse: "collapse",
        width: "100%",
      }}
    >
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Department</th>
          <th>Position</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.department}</td>
            <td>{employee.position}</td>
            <td>{employee.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
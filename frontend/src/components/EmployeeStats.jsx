function EmployeeStats() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginBottom: "30px",
      }}
    >
      <div
        style={{
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          minWidth: "180px",
        }}
      >
        <h3>Total Employees</h3>
        <h2>120</h2>
      </div>

      <div
        style={{
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          minWidth: "180px",
        }}
      >
        <h3>Active Employees</h3>
        <h2>110</h2>
      </div>

      <div
        style={{
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          minWidth: "180px",
        }}
      >
        <h3>Departments</h3>
        <h2>8</h2>
      </div>
    </div>
  );
}

export default EmployeeStats;
function EmployeeSearch() {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search employee..."
        style={{
          padding: "10px",
          width: "300px",
        }}
      />
    </div>
  );
}

export default EmployeeSearch;
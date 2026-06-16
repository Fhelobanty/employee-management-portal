function DepartmentCards({
  departments,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "30px",
      }}
    >
      <div
        style={{
          width: "250px",
          height: "140px",
          background: "#0f2f23",
          border:
            "1px solid #22c55e",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxShadow:
            "0 4px 15px rgba(0,0,0,0.3)",
        }}
      >
        <h3
          style={{
            color: "#86efac",
            marginBottom: "15px",
          }}
        >
          Total Departments
        </h3>

        <h1
          style={{
            color: "white",
            fontSize: "48px",
          }}
        >
          {departments.length}
        </h1>
      </div>
    </div>
  );
}

export default DepartmentCards;
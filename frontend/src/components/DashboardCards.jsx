function DashboardCards({
  employees = [],
  departments = [],
}) {
  const totalEmployees =
    employees.length;

  const activeEmployees =
    employees.filter(
      (employee) =>
        employee.status === "Active"
    ).length;

  const totalDepartments =
  departments?.length || 0;

  const engineers =
    employees.filter(
      (employee) =>
        employee.position
          .toLowerCase()
          .includes("engineer")
    ).length;

  const cards = [
    {
      title: "Total Employees",
      value: totalEmployees,
    },
    {
      title: "Active Employees",
      value: activeEmployees,
    },
    {
      title: "Departments",
      value: totalDepartments,
    },
    {
      title: "Engineers",
      value: engineers,
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px",
        marginBottom: "30px",
      }}
    >
      {cards.map((card) => (
        <div
          key={card.title}
          style={{
            background: "#0f2f23",
            padding: "25px",
            borderRadius: "12px",
            border:
              "1px solid #22c55e",
            textAlign: "center",
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
            {card.title}
          </h3>

          <h1
            style={{
              color: "white",
            }}
          >
            {card.value}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;
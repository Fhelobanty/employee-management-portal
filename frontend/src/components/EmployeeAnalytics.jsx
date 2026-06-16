import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function EmployeeAnalytics({
  employees,
}) {
  const activeEmployees =
    employees.filter(
      (e) => e.status === "Active"
    ).length;

  const inactiveEmployees =
    employees.length -
    activeEmployees;

  const statusData = [
    {
      name: "Active",
      value: activeEmployees,
    },
    {
      name: "Inactive",
      value: inactiveEmployees,
    },
  ];

  const departmentMap = {};

  employees.forEach((employee) => {
    departmentMap[
      employee.department
    ] =
      (departmentMap[
        employee.department
      ] || 0) + 1;
  });

  const departmentData =
    Object.entries(
      departmentMap
    ).map(([name, total]) => ({
      name,
      total,
    }));

  const COLORS = [
    "#22c55e",
    "#ef4444",
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "1fr 1fr",
        gap: "30px",
        marginTop: "30px",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        <h3>
          Employee Status
        </h3>

        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <PieChart>
            <Pie
              data={statusData}
              dataKey="value"
              outerRadius={100}
            >
              {statusData.map(
                (
                  entry,
                  index
                ) => (
                  <Cell
                    key={index}
                    fill={
                      COLORS[
                        index
                      ]
                    }
                  />
                )
              )}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div
        style={{
          background: "#ffffff",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        <h3>
          Employees Per Department
        </h3>

        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <BarChart
            data={
              departmentData
            }
          >
            <XAxis
              dataKey="name"
            />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="total"
              fill="#16a34a"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default EmployeeAnalytics;
export async function getEmployees() {
  const response = await fetch(
    "http://localhost:5000/api/employees"
  );

  return response.json();
}
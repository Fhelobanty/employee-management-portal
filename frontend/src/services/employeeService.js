import API_URL from "./api";
export async function getEmployees() {
  const response = await fetch(
    `${API_URL}/api/employees`
  );

  return response.json();
}
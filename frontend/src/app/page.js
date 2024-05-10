import Image from "next/image";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
import { Button, Table } from "@mui/joy";
import TableComponent from "./components/TableComponent";
import ButtonComponent from "./components/ButtonComponent";
import EmployeeDetail from "./components/EmployeeDetail";

async function fetchEmployees() {
  const response = await fetch(`${baseURL}employees`);
  const employees = await response.json();
  return employees;
}

async function fetchEmployee(id) {
  const response = await fetch(`${baseURL}employees/${id}`);
  const employee = await response.json();
  return employee;
}

export default async function Home() {
  const employees = await fetchEmployees();
  return (
    <main className=" min-h-screen m-6 bg-white p-6 rounded-lg  shadow-2xl">
      <EmployeeDetail employees={employees} />
      <TableComponent />
    </main>
  );
}

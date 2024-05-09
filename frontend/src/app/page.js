import Image from "next/image";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
import { Button, Table } from "@mui/joy";
import TableComponent from "./components/TableComponent";
import ButtonComponent from "./components/ButtonComponent";

async function fetchEmployees() {
  const response = await fetch(`${baseURL}employees`);
  const employees = await response.json();
  return employees;
}

export default async function Home() {
  const employees = await fetchEmployees();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      {employees.map((employee) => (
        <div
          key={employee.id}
          className="flex flex-col items-center justify-center "
        >
          <h2 className="text-2xl font-bold text-black">{employee.name}</h2>
        </div>
      ))}
      <ButtonComponent />

      <TableComponent />
    </main>
  );
}

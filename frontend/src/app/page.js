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
    <main className=" min-h-full m-6">
      <TableComponent />
      
    </main>
  );
}

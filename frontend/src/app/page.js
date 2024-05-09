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
    <main className=" min-h-full m-6 bg-white p-6 rounded-lg  shadow-2xl">
      <div className="flex gap-10 p-6">
        <div>
          <h1 className="text-xl font-bold text-gray-600">Nama Karyawan</h1>
          <select
            name="employee"
            id="employee"
            className="w-60 h-10 border border-gray-300 rounded-md text-black"
          >
            {employees.map((employee, index) => (
              <option key={index} value={employee.id} className="text-black">
                {employee.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-600">Rate</h1>
        </div>
      </div>
      <TableComponent />
    </main>
  );
}

import Image from "next/image";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
import { Button, Table } from "@mui/joy";
import TableComponent from "./components/TableComponent";
import ButtonComponent from "./components/ButtonComponent";
import EmployeeDetail from "./components/EmployeeDetail";
import convertMinutesToHours from "./utils/convertMinuteToHours";

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

async function fetchActivities(id) {
  const response = await fetch(`${baseURL}activities/${id}`);
  const activities = await response.json();
  return activities;
}

export default async function Home() {
  const employees = await fetchEmployees();
  const employee = await fetchEmployee(1);
  console.log(employee);
  return (
    <main className=" min-h-screen m-6 bg-white p-6 rounded-lg  shadow-2xl">
      <EmployeeDetail employees={employees} />
      <TableComponent />

      <div className="flex justify-between mt-4 p-6">
        <div>
          <h1 className="text-custom-blue font-bold text-lg">Total Durasi</h1>
          <h1 className="text-custom-blue font-black text-xl">
            Total Pendapatan
          </h1>
        </div>

        <div className="flex flex-col  justify-end items-end">
          <h1 className="text-custom-blue font-bold text-lg">
            {convertMinutesToHours(185)}
          </h1>
          <h1 className="text-custom-blue font-black text-xl">{180000}</h1>
        </div>
      </div>
    </main>
  );
}

"use client";
import Image from "next/image";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
import { Button, Table } from "@mui/joy";
import TableComponent from "./components/TableComponent";
import ButtonComponent from "./components/ButtonComponent";
import EmployeeDetail from "./components/EmployeeDetail";
import convertMinutesToHours from "./utils/convertMinuteToHours";
import formatRupiah from "./utils/formatRupiah";
import { useState, useEffect } from "react";

// async function fetchEmployees() {
//   const response = await fetch(`${baseURL}employees`);
//   const employees = await response.json();
//   return employees;
// }

export default function Home() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(1);
  const [employeeActivities, setEmployeeActivities] = useState([]);
  const [employee, setEmployee] = useState("");

  useEffect(() => {
    async function fetchEmployees() {
      const response = await fetch(`${baseURL}employees`);
      const data = await response.json();
      setEmployees(data);
    }

    fetchEmployees();
  }, []);

  useEffect(() => {
    async function fetchActivities() {
      if (!selectedEmployee) return;

      const response = await fetch(`${baseURL}activities/${selectedEmployee}`);
      const data = await response.json();
      setEmployeeActivities(data);
    }
    async function fetchEmployee() {
      const response = await fetch(`${baseURL}employees/${selectedEmployee}`);
      const data = await response.json();
      setEmployee(data);
    }

    fetchActivities();
    fetchEmployee();
  }, [selectedEmployee]);

  return (
    <main className=" min-h-screen m-6 bg-white p-6 rounded-lg  shadow-2xl">
      <EmployeeDetail
        employees={employees}
        onEmployeeSelect={setSelectedEmployee}
        employee={employee}
      />

      <TableComponent activities={employeeActivities} />

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
          <h1 className="text-custom-blue font-black text-xl">
            {formatRupiah(180000)}
          </h1>
        </div>
      </div>
    </main>
  );
}

"use client";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
import TableComponent from "./components/TableComponent";
import EmployeeDetail from "./components/EmployeeDetail";
import convertMinutesToHours from "./utils/convertMinuteToHours";
import formatRupiah from "./utils/formatRupiah";
import { useState, useEffect } from "react";
import getIdsAsString from "./utils/getIdsAsString";
import calculateOvertime from "./utils/calculateOvertime";

export default function Home() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(1); // id for selected employee
  const [employeeActivities, setEmployeeActivities] = useState([]);
  const [employee, setEmployee] = useState(""); // detail for selected employee
  const [projectName, setProjectName] = useState([]);
  const [searchActivity, setSearchActivity] = useState("");

  useEffect(() => {
    async function fetchEmployees() {
      const response = await fetch(`${baseURL}employees`);
      const data = await response.json();
      setEmployees(data);
    }

    fetchEmployees();
  }, []);

  async function fetchActivities() {
    if (!selectedEmployee) return;

    const response = await fetch(`${baseURL}activities/${selectedEmployee}`);
    const data = await response.json();
    setEmployeeActivities(data);
  }

  useEffect(() => {
    async function fetchEmployee() {
      const response = await fetch(`${baseURL}employees/${selectedEmployee}`);
      const data = await response.json();
      setEmployee(data);
    }

    fetchActivities();
    fetchEmployee();
  }, [selectedEmployee]);

  // handling search
  useEffect(() => {
    async function searchActivityHandler() {
      const response = await fetch(
        `${baseURL}activities/${selectedEmployee}?title=${searchActivity}&ProjectIds=${getIdsAsString(
          projectName
        )}`
      );
      const data = await response.json();
      setEmployeeActivities(data);
    }
    searchActivityHandler();
  }, [searchActivity]);

  // handling filters

  // async function filterActivities () {
  //   const response = await fetch(`${baseURL}activities/${selectedEmployee}?ProjectIds=${getIdsAsString(projectName)}`);
  //   const data = await response.json();
  //   setEmployeeActivities(data);
  // }
  const handleFilter = async () => {
    const response = await fetch(
      `${baseURL}activities/${selectedEmployee}?ProjectIds=${getIdsAsString(
        projectName
      )}`
    );
    const data = await response.json();
    setEmployeeActivities(data);
  };

  const duration = employeeActivities.reduce(
    (acc, activity) => acc + activity.duration,
    0
  );

  const totalIncome = employeeActivities.reduce(
    (acc, activity) => acc + (activity.duration / 60) * employee.rate,
    0
  );

  const overtime = calculateOvertime(employeeActivities, employee.rate);

  // console.log(getIdsAsString(projectName), "<<<<< from page");

  return (
    <main className=" min-h-screen m-6 bg-white p-6 rounded-lg  shadow-2xl">
      <EmployeeDetail
        employees={employees}
        onEmployeeSelect={setSelectedEmployee}
        employee={employee}
        employeeActivities={employeeActivities}
        duration={duration}
        totalIncome={totalIncome}
        overtime={overtime}
      />

      <TableComponent
        activities={employeeActivities}
        selectedEmployee={selectedEmployee}
        setEmployeeActivities={setEmployeeActivities}
        fetchActivities={fetchActivities}
        projectName={projectName}
        setProjectName={setProjectName}
        handleFilter={handleFilter}
        searchActivity={searchActivity}
        setSearchActivity={setSearchActivity}
      />

      <div className="flex justify-between mt-4 p-6">
        <div>
          <h1 className="text-custom-blue font-bold text-lg">
            {" "}
            Total Durasi Overtime
          </h1>
          <h1 className="text-custom-blue font-bold text-lg">Total Durasi</h1>
          <h1 className="text-custom-blue font-black text-xl">
            Total Pendapatan Overtime
          </h1>
          <h1 className="text-custom-blue font-black text-2xl">
            Total Pendapatan
          </h1>
        </div>

        <div className="flex flex-col  justify-end items-end">
          <h1 className="text-custom-blue font-bold text-lg">
            {convertMinutesToHours(overtime.totalDuration)}
          </h1>
          <h1 className="text-custom-blue font-bold text-lg">
            {convertMinutesToHours(duration)}
          </h1>
          <h1 className="text-custom-blue font-black text-xl">
            {formatRupiah(overtime.totalEarnings)}
          </h1>
          <h1 className="text-custom-blue font-black text-2xl">
            {overtime.totalEarnings > 0
              ? formatRupiah(totalIncome + overtime.totalEarnings)
              : formatRupiah(totalIncome)}
          </h1>
        </div>
      </div>
    </main>
  );
}

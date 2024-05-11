"use client";
import formatRupiah from "../utils/formatRupiah";
import ExportCSVButton from "./ExportCSVButton";

export default function EmployeeDetail({
  employees,
  onEmployeeSelect,
  employee,
  employeeActivities,
  duration,
  totalIncome,
  overtime,
}) {
  return (
    <div className="flex justify-between p-6  pt-0 ">
      <div className="flex gap-10">
        <div>
          <h1 className="text-xl font-bold text-gray-600">Nama Karyawan</h1>
          <select
            name="employee"
            id="employee"
            className="w-60 h-10 border border-gray-300 rounded-md text-black"
            onChange={(e) => onEmployeeSelect(e.target.value)}
          >
            {employees.map((employee, index) => (
              <option key={index} value={employee.id} className="text-black">
                {employee.name}
              </option>
            ))}
          </select>
        </div>
        <div className="">
          <h1 className="text-xl font-bold text-gray-600">Rate</h1>
          <p className="text-black">
            {employee.rate ? formatRupiah(employee.rate) : 0} / hour
          </p>
        </div>
      </div>

      <div className=" flex items-center">
        <ExportCSVButton
          employeeActivities={employeeActivities}
          employee={employee}
          duration={duration}
          totalIncome={totalIncome}
          overtime={overtime}
        />
      </div>
    </div>
  );
}

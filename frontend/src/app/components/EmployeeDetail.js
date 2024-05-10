export default function EmployeeDetail({ employees }) {
  return (
    <div className="flex gap-10 p-6  pt-0">
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
      <div className="">
        <h1 className="text-xl font-bold text-gray-600">Rate</h1>
        <p className="text-black">Rp 12.000 / hour</p>
      </div>
    </div>
  );
}

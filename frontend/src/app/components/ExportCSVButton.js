"use client";
import * as React from "react";
import Button from "@mui/joy/Button";
import Box from "@mui/joy/Box";
import Papa from "papaparse";
import formatDate from "../utils/formatDate";
import formatTime from "../utils/formatTime";
import convertMinutesToHours from "../utils/convertMinuteToHours";
import formatCurrencyExport from "../utils/formatCurrencyExport";

export default function ExportCSVButton({
  employeeActivities,
  employee,
  duration,
  totalIncome,
  overtime,
}) {
  const dataMap = employeeActivities.map((item) => {
    return {
      "Judul Kegiatan": item.title,
      "Nama Proyek": item.Project.name,
      "Tanggal Mulai": formatDate(item.startDate),
      "Tanggal Berakhir": formatDate(item.endDate),
      "Waktu Mulai": formatTime(item.timeStart),
      "Waktu Berakhir": formatTime(item.timeEnd),
      Durasi: convertMinutesToHours(item.duration),
    };
  });
  const handleExport = () => {
    const employeeInfo = {
      "Nama Karyawan": employee.name,
      Rate: `Rp${formatCurrencyExport(employee.rate)} / hour`,
    };

    // Convert the employee info to CSV
    let csv = Papa.unparse([employeeInfo], { delimiter: ";" });

    // Add a blank line
    csv += "\n";
    // Assuming `data` is your data from the database
    csv += Papa.unparse(dataMap, { delimiter: ";" });
    // Add a blank line
    csv += "\n";

    // add total duration and total income
    const total = {
      "Total Durasi": convertMinutesToHours(duration),
      "Total Pendapatan": `Rp${formatCurrencyExport(totalIncome)}`,
      "Total Lembur": overtime.totalDuration
        ? convertMinutesToHours(overtime.totalDuration)
        : 0,
      "Total Pendapatan (Termasuk Lembur)":
        overtime.totalEarnings > 0
          ? `Rp${formatCurrencyExport(
              totalIncome + overtime.totalEarnings,
              "id"
            )}`
          : `Rp${formatCurrencyExport(
              totalIncome + overtime.totalEarnings,
              "id"
            )}`,
    };
    csv += Papa.unparse([total], { delimiter: ";" });
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "timesheet.csv";
    link.href = url;
    link.click();
  };
  return (
    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
      <Button color="danger" className="bg-custom-red " onClick={handleExport}>
        Export Laporan
      </Button>
    </Box>
  );
}

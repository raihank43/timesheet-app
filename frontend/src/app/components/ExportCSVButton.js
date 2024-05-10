"use client";
import * as React from "react";
import Button from "@mui/joy/Button";
import Box from "@mui/joy/Box";
import Papa from "papaparse";

export default function ExportCSVButton() {
  const data = [
    {
      title: "Title 1",
      projectName: "Project 1",
      startDate: "2022-01-01",
      endDate: "2022-01-31",
      timeStart: "09:00",
      timeEnd: "17:00",
      duration: 480,
    },
    {
      title: "Title 1",
      projectName: "Project 1",
      startDate: "2022-01-01",
      endDate: "2022-01-31",
      timeStart: "09:00",
      timeEnd: "17:00",
      duration: 480,
    },
    {
      title: "Title 1",
      projectName: "Project 1",
      startDate: "2022-01-01",
      endDate: "2022-01-31",
      timeStart: "09:00",
      timeEnd: "17:00",
      duration: 480,
    },
    {
      title: "Title 1",
      projectName: "Project 1",
      startDate: "2022-01-01",
      endDate: "2022-01-31",
      timeStart: "09:00",
      timeEnd: "17:00",
      duration: 480,
    },
    // ... more items ...
  ];
  const handleExport = () => {
    const employeeInfo = {
      employeeName: "raihan",
      rate: "20000",
    };

    // Convert the employee info to CSV
    let csv = Papa.unparse([employeeInfo], { delimiter: ";" });

    // Add a blank line
    csv += "\n";
    // Assuming `data` is your data from the database
    csv += Papa.unparse(data, { delimiter: ";" });
    console.log(csv);
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

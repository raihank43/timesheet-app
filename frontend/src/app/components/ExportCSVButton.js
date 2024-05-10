import * as React from "react";
import Button from "@mui/joy/Button";
import Box from "@mui/joy/Box";

export default function ExportCSVButton() {
  return (
    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
      <Button color="danger" className="bg-custom-red">Export Laporan</Button>
    </Box>
  );
}

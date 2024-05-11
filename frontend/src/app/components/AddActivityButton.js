"use client";
import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import AddActivityModal from "./AddActivityModal";

export default function AddActivityButton({
  selectedEmployee,
  setEmployeeActivities,
}) {
  const [open, setOpen] = React.useState(false);
  return open ? (
    <React.Fragment>
      <AddActivityModal
        open={open}
        setOpen={setOpen}
        selectedEmployee={selectedEmployee}
        setEmployeeActivities={setEmployeeActivities}
      />
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        <Button
          variant="soft"
          startDecorator={<Add />}
          className="text-custom-blue font-bold"
          onClick={() => {
            setOpen(true);
          }}
        >
          Tambah Kegiatan
        </Button>
      </Box>
    </React.Fragment>
  ) : (
    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
      <Button
        variant="soft"
        startDecorator={<Add />}
        className="text-custom-blue font-bold"
        onClick={() => {
          setOpen(true);
        }}
      >
        Tambah Kegiatan
      </Button>
    </Box>
  );
}

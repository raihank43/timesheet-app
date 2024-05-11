"use client";
import { IconButton } from "@mui/joy";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import UpdateActivityModal from "./UpdateActivityModal";
export default function UpdateActivityButton({ id, data, fetchActivities }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <UpdateActivityModal
        open={open}
        setOpen={setOpen}
        activityId={id}
        data={data}
        fetchActivities={fetchActivities}
      />
      <IconButton
        style={{ color: "red" }}
        color="warning"
        onClick={() => {
          console.log("button update");
          setOpen(true);
        }}
      >
        <EditIcon />
      </IconButton>
    </>
  );
}

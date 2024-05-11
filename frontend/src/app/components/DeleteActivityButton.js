"use client";
import { IconButton } from "@mui/joy";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export default function DeleteActivityButton({ id, fetchActivities }) {
  const deleteActivity = async () => {
    try {
      const response = await fetch(`${baseURL}activities/${id}`, {
        method: "DELETE",
      });
      const res = await response.json();
      if (response.ok) {
        fetchActivities();
      } else {
        console.log("Activity not deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <IconButton
        style={{ color: "red" }}
        color="warning"
        onClick={() => deleteActivity(id)}
      >
        <DeleteIcon />
      </IconButton>
    </>
  );
}

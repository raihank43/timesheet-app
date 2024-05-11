"use client";
import * as React from "react";
import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Snackbar from "@mui/joy/Snackbar";

export default function ErrorSnackBar({ errorMessage, open, setOpen }) {
  const [variant, setVariant] = React.useState("solid");
  const [color, setColor] = React.useState("danger");

  console.log(errorMessage, "<<<<<");
  return (
    <Stack spacing={2} alignItems="center">
      <Snackbar
        autoHideDuration={4000}
        open={open}
        variant={variant}
        color={color}
        onClose={(event, reason) => {
          if (reason === "clickaway") {
            return;
          }
          setOpen(false);
        }}
      >
        {errorMessage}
      </Snackbar>
    </Stack>
  );
}

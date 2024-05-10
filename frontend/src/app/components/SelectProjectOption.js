"use client";
import * as React from "react";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import AddProjectModal from "./AddProjectModal";

export default function SelectProjectOption({ projectName, setProjectName }) {
  const [open, setOpen] = React.useState(false);

  const handleChange = (event, newValue) => {
    setProjectName(newValue);
  };

  return open ? (
    <AddProjectModal open={open} setOpen={setOpen} />
  ) : (
    <Select
      placeholder="Pilih Proyek"
      indicator={<KeyboardArrowDown />}
      onChange={handleChange}
      sx={{
        width: "100%",
        [`& .${selectClasses.indicator}`]: {
          transition: "0.2s",
          [`&.${selectClasses.expanded}`]: {
            transform: "rotate(-180deg)",
          },
        },
      }}
    >
      <Option
        value="all"
        className="font-bold text-custom-red"
        onClick={() => {
          console.log("clicked");
          setOpen(true);
        }}
      >
        + Tambah Proyek
      </Option>
      <Option value="dog">Dog</Option>
      <Option value="cat">Cat</Option>
      <Option value="fish">Fish</Option>
      <Option value="bird">Bird</Option>
    </Select>
  );
}

"use state";
import * as React from "react";
import IconButton from "@mui/joy/IconButton";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterListModal from "./FilterListModal";
import { Filter } from "@mui/icons-material";

export default function FilterListButton() {
  const [open, setOpen] = React.useState(false);
  return open ? (
    <>
      <FilterListModal open={open} setOpen={setOpen} />
      <React.Fragment>
        <IconButton
          size="sm"
          variant="outlined"
          color="danger"
          onClick={() => {
            setOpen(true);
          }}
        >
          <FilterListIcon />
        </IconButton>
      </React.Fragment>
    </>
  ) : (
    <React.Fragment>
      <IconButton
        size="sm"
        variant="outlined"
        color="danger"
        onClick={() => {
          setOpen(true);
        }}
      >
        <FilterListIcon />
      </IconButton>
    </React.Fragment>
  );
}

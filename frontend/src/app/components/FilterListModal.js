"use client";
import * as React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import Stack from "@mui/joy/Stack";
import ModalClose from "@mui/joy/ModalClose";
import MenuItem from "@mui/joy/MenuItem";
import { Sheet } from "@mui/joy";
import SelectProjectOption from "./SelectProjectOption";
import { useState } from "react";
import FilterOptionComponent from "./FilterOptionComponent";

export default function FilterListModal({ open, setOpen }) {
  const [projectName, setProjectName] = useState([]);

  return (
    <React.Fragment>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog className="min-w-[500px] ">
          <DialogTitle className="font-bold pb-10">Filter</DialogTitle>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <ModalClose variant="plain" sx={{ m: 1 }} />
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Proyek</FormLabel>
                <FilterOptionComponent
                  projectName={projectName}
                  setProjectName={setProjectName}
                />
              </FormControl>

              <Sheet className=" flex justify-end gap-5">
                <Button
                  variant="plain"
                  color="danger"
                  onClick={() => setProjectName([])}
                >
                  Hapus Filter
                </Button>
                <Button
                  type="submit"
                  variant="solid"
                  color="danger"
                  className="bg-custom-red"
                >
                  Terapkan
                </Button>
              </Sheet>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}

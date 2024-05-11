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
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export default function AddProjectModal({ open, setOpen, fetchProjects }) {
  const [projectName, setProjectName] = useState("");

  const handleInput = (setter) => (event) => {
    setter(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch(`${baseURL}projects`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: projectName,
        }),
      });
      if (res.ok) {
        fetchProjects();
        setOpen(false);
      } else {
        throw new Error("Gagal menambahkan proyek");
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(projectName);

  return (
    <React.Fragment>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog className="min-w-[500px] ">
          <DialogTitle className="font-bold pb-10">
            Tambah Proyek Baru
          </DialogTitle>
          <form action={handleSubmit}>
            <ModalClose variant="plain" sx={{ m: 1 }} />
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Nama Proyek</FormLabel>
                <Input
                  autoFocus
                  required
                  value={projectName}
                  onChange={handleInput(setProjectName)}
                />
              </FormControl>

              <Sheet className=" flex justify-end gap-5">
                <Button
                  variant="plain"
                  color="danger"
                  onClick={() => setOpen(false)}
                >
                  Kembali
                </Button>
                <Button
                  type="submit"
                  variant="solid"
                  color="danger"
                  className="bg-custom-red"
                >
                  Simpan
                </Button>
              </Sheet>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}

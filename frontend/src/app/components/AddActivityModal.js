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

export default function AddActivityModal({ open, setOpen }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [title, setTitle] = useState("");
  const [projectName, setProjectName] = useState("");

  const handleInput = (setter) => (event) => {
    setter(event.target.value);
  };

//   console.log({
//     title,
//     projectName,
//     startDate,
//     endDate,
//     startTime,
//     endTime,
//   });

  return (
    <React.Fragment>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog className="min-w-[500px] ">
          <DialogTitle className="font-bold pb-10">
            Tambah Kegiatan Baru
          </DialogTitle>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <ModalClose variant="plain" sx={{ m: 1 }} />
            <Stack spacing={2}>
              <Sheet className=" flex flex-row gap-5">
                <FormControl>
                  <FormLabel>Tanggal Mulai</FormLabel>
                  <Input
                    type="date"
                    required
                    value={startDate}
                    onChange={handleInput(setStartDate)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Tanggal Akhir</FormLabel>
                  <Input
                    type="date"
                    required
                    value={endDate}
                    onChange={handleInput(setEndDate)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Jam Mulai</FormLabel>
                  <Input
                    type="time"
                    required
                    value={startTime}
                    onChange={handleInput(setStartTime)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Jam Akhir</FormLabel>
                  <Input
                    type="time"
                    required
                    value={endTime}
                    onChange={handleInput(setEndTime)}
                  />
                </FormControl>
              </Sheet>

              <FormControl>
                <FormLabel>Judul Kegiatan</FormLabel>
                <Input
                  autoFocus
                  required
                  value={title}
                  onChange={handleInput(setTitle)}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Nama Proyek</FormLabel>
                <SelectProjectOption
                  projectName={projectName}
                  setProjectName={setProjectName}
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

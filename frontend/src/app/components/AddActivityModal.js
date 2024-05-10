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

export default function AddActivityModal({ open, setOpen }) {
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
                  <Input type="date" required />
                </FormControl>
                <FormControl>
                  <FormLabel>Tanggal Akhir</FormLabel>
                  <Input type="date" required />
                </FormControl>
                <FormControl>
                  <FormLabel>Jam Mulai</FormLabel>
                  <Input type="time" required />
                </FormControl>
                <FormControl>
                  <FormLabel>Jam Akhir</FormLabel>
                  <Input type="time" required />
                </FormControl>
              </Sheet>

              <FormControl>
                <FormLabel>Judul Kegiatan</FormLabel>
                <Input autoFocus required />
              </FormControl>

              <FormControl>
                <FormLabel>Nama Proyek</FormLabel>
                <SelectProjectOption />
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

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
import ErrorSnackBar from "./ErrorSnackBar";
import SuccessModal from "./SuccessModal";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export default function AddActivityModal({
  open,
  setOpen,
  selectedEmployee,
  setEmployeeActivities,
}) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [title, setTitle] = useState("");
  const [projectId, setProjectId] = useState("");
  const [openError, setOpenError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedProjectName, setSelectedProjectName] = useState("");
  const [openSuccess, setOpenSuccess] = useState(false);

  const handleInput = (setter) => (event) => {
    setter(event.target.value);
  };

  // console.log(
  //   {
  //     title,
  //     projectId,
  //     startDate,
  //     endDate,
  //     startTime,
  //     endTime,
  //     selectedEmployee,
  //     selectedProjectName,
  //   },
  //   "<<< from add activity modal"
  // );

  const handleSubmit = async () => {
    try {
      const res = await fetch(`${baseURL}activities/${selectedEmployee}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          ProjectId: projectId,
          startDate,
          endDate,
          timeStart: startTime,
          timeEnd: endTime,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }
      data.Project = { name: selectedProjectName };
      setOpenSuccess(true);
      // setOpen(false);

      setEmployeeActivities((prev) => [...prev, data]);
    } catch (error) {
      console.log(error, "<<<<< error from add activity");
      setErrorMessage(error.message);
      setOpenError(true);
    }
  };

  return (
    <React.Fragment>
      <SuccessModal
        openSuccess={openSuccess}
        setOpenSuccess={setOpenSuccess}
        setOpen={setOpen}
      />
      <ErrorSnackBar
        open={openError}
        setOpen={setOpenError}
        errorMessage={errorMessage}
      />
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog className="min-w-[500px] ">
          <DialogTitle className="font-bold pb-10">
            Tambah Kegiatan Baru
          </DialogTitle>
          <form action={handleSubmit}>
            <ModalClose variant="plain" sx={{ m: 1 }} />
            <Stack spacing={2}>
              <Sheet className=" flex flex-row gap-5">
                <FormControl>
                  <FormLabel>Tanggal Mulai</FormLabel>
                  <Input
                    type="date"
                    value={startDate}
                    onChange={handleInput(setStartDate)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Tanggal Akhir</FormLabel>
                  <Input
                    type="date"
                    value={endDate}
                    onChange={handleInput(setEndDate)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Jam Mulai</FormLabel>
                  <Input
                    type="time"
                    value={startTime}
                    onChange={handleInput(setStartTime)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Jam Akhir</FormLabel>
                  <Input
                    type="time"
                    value={endTime}
                    onChange={handleInput(setEndTime)}
                  />
                </FormControl>
              </Sheet>

              <FormControl>
                <FormLabel>Judul Kegiatan</FormLabel>
                <Input
                  autoFocus
                  value={title}
                  onChange={handleInput(setTitle)}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Nama Proyek</FormLabel>
                <SelectProjectOption
                  projectId={projectId}
                  setProjectId={setProjectId}
                  setSelectedProjectName={setSelectedProjectName}
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

"use state";
import * as React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { Check } from "@mui/icons-material";

export default function SuccessModal({
  openSuccess,
  setOpenSuccess,
  setOpen,
  update,
}) {
  return (
    <React.Fragment>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={openSuccess}
        onClose={() => {
          setOpenSuccess(false);
          setOpen(false);
        }}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
          className="flex items-center justify-center flex-col w-[1000px] p-12"
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Check
            color="success"
            className="bg-green-400 rounded-full shadow-lg shadow-green-300 w-24 h-24 mb-10"
          />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            Berhasil
          </Typography>
          <Typography id="modal-desc">
            {update
              ? `Perbarui Proyek Berhasil`
              : "Tambah Proyek Baru Berhasil"}
          </Typography>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}

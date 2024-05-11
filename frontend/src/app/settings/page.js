"use client";
import { Sheet } from "@mui/joy";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import FloatingLabelInput from "../components/FloatingLabelsInput";
import React, { useState } from "react";
import InputReactNumberFormat from "../components/InputReactNumberFormat";
import { useRouter } from "next/navigation";
import ErrorSnackBar from "../components/ErrorSnackBar";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export default function SettingPage() {
  const [namaKaryawan, setNamaKaryawan] = useState("");
  const [rate, setRate] = useState("");
  const [open, setOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const router = useRouter();

  const handleCurrencyChange = (event) => {
    setRate(event.target.value);
  };

  const handleInputChange = (event) => {
    setNamaKaryawan(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch(`${baseURL}employees`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: namaKaryawan,
          rate: rate,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }
      router.push("/");
    } catch (error) {
      console.log(error, "<<<<<");
      setErrorMessage(error.message);
      setOpen(true);
    }
  };

  // console.log(namaKaryawan, "<<<<<");
  // console.log(rate, "<<<<<");
  return (
    <main className="flex  w-full min-h-screen items-center ">
      <ErrorSnackBar
        open={open}
        setOpen={setOpen}
        errorMessage={errorMessage}
      />
      <Sheet
        sx={{
          width: 450,
          mx: "auto", // margin left & right
          my: 4, // margin top & bottom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: "sm",
          boxShadow: "md",
        }}
        variant="outlined"
      >
        <div>
          <Typography level="h4">Tambahkan Karyawan Baru</Typography>
        </div>
        <form action={handleSubmit}>
          <FormControl>
            <FloatingLabelInput
              info={{ nama: "Nama Karyawan", type: "text" }}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <InputReactNumberFormat setRate={setRate} />
          </FormControl>
          <Sheet className="flex flex-grow  justify-around gap-10 mt-5">
            <Button
              onClick={() => router.push("/")}
              className="w-full"
              variant="outlined"
            >
              Batalkan
            </Button>
            <Button className="w-full" type="submit">
              Simpan
            </Button>
          </Sheet>
        </form>
      </Sheet>
    </main>
  );
}

"use client";
import { Button, Table } from "@mui/joy";
import { useRouter } from "next/navigation";

export default function ButtonComponent() {
  const router = useRouter();
  return (
    <Button
      variant="soft"
      color="success"
      className=""
      onClick={() => {
        router.push("/settings");
      }}
    >
      Test
    </Button>
  );
}

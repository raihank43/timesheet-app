"use client";
import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Divider from "@mui/joy/Divider";
import Sheet from "@mui/joy/Sheet";
import GitHubIcon from "@mui/icons-material/GitHub";
import ColorLensRoundedIcon from "@mui/icons-material/ColorLensRounded";
import { LinkedIn } from "@mui/icons-material";

export default function FooterComponent() {
  const [color, setColor] = React.useState("neutral");
  return (
    <Sheet
      variant="solid"
      color={color}
      invertedColors
      sx={{
        ...(color !== "neutral" && {
          bgcolor: `${color}.800`,
        }),
        flexGrow: 1,
        p: 2,
        borderRadius: { xs: 0, sm: "sm" },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <IconButton
          variant="soft"
          size="sm"
          onClick={() => {
            const colors = [
              "primary",
              "neutral",
              "danger",
              "success",
              "warning",
            ];

            const nextColorIndex = colors.indexOf(color) + 1;
            setColor(colors[nextColorIndex] ?? colors[0]);
          }}
        >
          <ColorLensRoundedIcon fontSize="small" />
        </IconButton>
        <Divider orientation="vertical" />
        <a
          href="https://www.linkedin.com/in/raden-raihan-kusuma-9a37b8249/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton variant="plain">
            <LinkedIn />
          </IconButton>
        </a>
        <a
          href="https://github.com/raihank43"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton variant="plain">
            <GitHubIcon />
          </IconButton>
        </a>

        <Box className=" w-full flex justify-center gap-10">
          <p className="font-bold">Timesheet App</p>
          <Divider orientation="vertical" />
          <p className="font-bold">© 2024 Raden Raihan Kusuma</p>
        </Box>
      </Box>
  
    </Sheet>
  );
}

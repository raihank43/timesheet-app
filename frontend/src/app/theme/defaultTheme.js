"use client";
import { extendTheme } from "@mui/joy/styles";

const defaultTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        // affects all Joy components that has `color="primary"` prop.
        background: {
          body: "#F7F8FB", // Set the default background color
        },
      },
    },
    dark: {
      palette: {
        // affects all Joy components that has `color="primary"` prop.
        background: {
          body: "#1A202C", // Set the default background color
        },
      },
    },
  },
});

export default defaultTheme;

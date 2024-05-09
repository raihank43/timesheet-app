import { extendTheme } from "@mui/joy/styles";

const defaultTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        // affects all Joy components that has `color="primary"` prop.
        primary: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          // 300, 400, ..., 800,
          900: "#78350f",
        },
      },
    },
  },
  fontFamily: {
    display: "Inter, var(--joy-fontFamily-fallback)",
    body: "Inter, var(--joy-fontFamily-fallback)",
  },
});

export default defaultTheme;

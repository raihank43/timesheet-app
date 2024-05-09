import { Inter, Nunito, Poppins } from "next/font/google";
import "./globals.css";
import "@fontsource-variable/nunito";
import ThemeRegistry from "./ThemeRegistry";
import { CssBaseline, CssVarsProvider } from "@mui/joy";
import githubTheme from "./theme/githubTheme";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Timesheet Happy Homes",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <CssVarsProvider>
          <CssBaseline />
          {children}
        </CssVarsProvider>
      </body>
    </html>
  );
}

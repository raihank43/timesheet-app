import { Inter, Nunito, Poppins } from "next/font/google";
import "./globals.css";
import "@fontsource-variable/nunito";
import { CssBaseline, CssVarsProvider } from "@mui/joy";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Timesheet Management App",
  description:
    "A Tool designed to track freelancers' work hours and calculate their pay based on the hours worked.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <CssVarsProvider>
          <CssBaseline />
          <HeaderComponent />
          <main className="flex min-h-screen flex-col items-center justify-between bg-background-default">
            {children}
          </main>
          <FooterComponent />
        </CssVarsProvider>
      </body>
    </html>
  );
}

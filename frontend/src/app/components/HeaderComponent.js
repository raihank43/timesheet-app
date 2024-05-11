"use client";
import { useState, useEffect } from "react";
import TabsComponent from "./TabsComponent";

export default function HeaderComponent() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setIsScrolled(isScrolled);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      // Clean up the event listener on component unmount
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed transform ${
          isScrolled ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-500 flex items-center justify-between p-4 bg-white w-full shadow-lg z-10`}
      >
        <div className="flex items-center gap-2">
          <img src="/HHLogo.png" alt="Logo" className="h-10" />
          <div className="flex flex-col items-center ">
            <h1 className="text-lg font-black  text-custom-red">Timesheet</h1>
            <h1 className="text-lg font-black text-custom-red">Management</h1>
          </div>
        </div>
      </header>
      <div className="w-full flex ">
        <h1 className="p-6 text-2xl font-bold text-black">HH Timesheet</h1>
      </div>
      <nav className="flex items-center justify-between p-2 bg- w-full shadow-lg">
        <TabsComponent />
      </nav>
    </>
  );
}

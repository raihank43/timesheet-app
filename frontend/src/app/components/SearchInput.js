import { SearchRounded } from "@mui/icons-material";
import React from "react";
export default function SearchInput() {
  return (
    <div className="flex gap-2 flex-wrap">
      <div className="relative">
        <input
          type="text"
          className="pl-10 pr-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold"
          placeholder="Cari"
        />
        <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
          <SearchRounded className="text-gray-400" />
        </div>
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import { SearchIcon } from "./Icons";

export default function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="relative hidden md:flex">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <SearchIcon />
      </div>
      <input
        type="text"
        name="search"
        id="search"
        className="block w-28 pl-10 pr-2 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

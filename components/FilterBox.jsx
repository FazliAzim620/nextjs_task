"use client";
import { useState } from "react";
import { CancelIcon, DownArrow, LocationIcon } from "./Icons";

export default function FilterBox({ onClose }) {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [ferryTypes, setFerryTypes] = useState({
    normal: false,
    highSpeed: false,
  });

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleFerryTypeChange = (type) => {
    setFerryTypes((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <div className="w-full md:w-2/3 rounded-md shadow  bg-white h-[100%] ">
      <div className="flex justify-between items-center  p-2 pb-0">
        <h2 className="text-lg font-semibold">Filters</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <CancelIcon />
        </button>
      </div>

      <div className="mb-4 p-2 py-0">
        <h3 className="font-medium mb-2">Operating in</h3>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-1 flex items-center pointer-events-none">
            <LocationIcon />
          </div>
          <select
            value={selectedCountry}
            onChange={handleCountryChange}
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-1 pl-6 pr-5 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="">Select a country</option>
            <option value="greece">Greece</option>
            <option value="italy">Italy</option>
            <option value="spain">Spain</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <DownArrow />
          </div>
        </div>
      </div>
      <hr className="border-1" />
      <div className="p-2 pb-3">
        <h3 className="font-medium mb-2">Ferry types</h3>
        <label className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={ferryTypes.normal}
            onChange={() => handleFerryTypeChange("normal")}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="ml-2 text-gray-700">Normal ferries</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={ferryTypes.highSpeed}
            onChange={() => handleFerryTypeChange("highSpeed")}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="ml-2 text-gray-700">High-speed ferries</span>
        </label>
      </div>
    </div>
  );
}

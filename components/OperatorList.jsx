"use client";
import { useState } from "react";
import SearchBar from "./SearchBar";
import OperatorCard from "./OperatorCard";
import FilterBox from "./FilterBox";

export default function OperatorList() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const operators = [
    {
      name: "Blue Star Ferries",
      logo: "./blue.png",
      rating: 4.5,
      reviews: 1389,
      description:
        "Blue Star Ferries is currently the biggest ferry company in Greece. It is a member of Attica Group, one of the most significant companies in the Greek shipping industry. Its fleet consists of vessels of the latest technology and serves itineraries starting from the port of Piraeus and heading to the islands of Cyclades (Mykonos, Santorini, Paros etc.)Dodecanese (Rhodes, Kos etc.). Blue Star Ferries reaches over 50 destinations in total. Ever though Blue Star...",
      operatesIn: "Greece",
      vesselsNumber: 8,
      ferryTypes: "8 normal",
      popularVessels: ["Blue Star Delos", "Blue Star Naxos"],
      flag: "./flag.jfif",
    },
    {
      name: "SeaJets",
      logo: "./seajets.png",
      rating: 4,
      reviews: 2401,
      description:
        "SeaJets is the largest company in high-speed vessels in Greece. It operates a fleet of modern and fast high-speed vessels, serving multiple routes in the Aegean Sea.",
      operatesIn: "Greece",
      vesselsNumber: 17,
      ferryTypes: "17 high-speed",
      popularVessels: ["Tera Jet", "Champion Jet 1"],
      flag: "./flag.jfif",
    },
    {
      name: "ANEK SUPERFAST",
      logo: "./anek.png",
      rating: 4,
      reviews: 997,
      description:
        "ANEK SUPERFAST is a joint venture established between two major Greek ferry companies, ANEK Lines and Superfast Ferries. They operate routes mainly between Greece and Italy.",
      operatesIn: ["Greece", "Italy"],
      vesselsNumber: 10,
      ferryTypes: "10 normal",
      popularVessels: ["ANEK 1", "SUPERFAST XII"],
      flag: "./flag.jfif",
      otherFlag: "./italy.png",
    },
  ];

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  return (
    <div className="space-y-6">
      <SearchBar toggleFilter={toggleFilter} />
      <div className="flex flex-col md:flex-row gap-6">
        {isFilterOpen && <FilterBox onClose={toggleFilter} />}
        <div className="flex-grow space-y-4">
          {operators.map((operator, index) => (
            <OperatorCard key={index} {...operator} />
          ))}
        </div>
      </div>
    </div>
  );
}

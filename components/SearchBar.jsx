import {
  ArrowRight,
  DownArrow,
  FilterIcon,
  GlobeIcon,
  SortIcon,
} from "./Icons";
import SearchInput from "./SearchInput";

export default function SearchBar({ toggleFilter }) {
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold ">Ferry operators</h1>
        <button className="bg-primary-button px-2 py-1 rounded-lg text-white hidden md:flex items-center border-2 border-yellow-300 ">
          <ArrowRight /> Book your tickets
        </button>
      </div>

      <p className="text-gray-600">
        Discover the <b className="text-black">57 Ferry operators </b>we work
        with
      </p>
      <div className="flex items-center justify-between">
        <div className="mt-2 flex items-center gap-3">
          <button
            onClick={toggleFilter}
            className="flex items-center border-2 px-2 py-1 rounded-md text-gray-600 text-sm"
          >
            <FilterIcon /> Filters
          </button>
          <button className="flex justify-between  items-center  border-2 px-2 py-1 rounded-md  text-gray-600 text-sm w-[60vw] md:w-auto">
            <span className="flex items-center gap-2">
              <SortIcon />
              <span className="hidden md:inline">
                Sort by: Reviews number (high first)
              </span>
              <span className="md:hidden">Review</span>
            </span>
            <DownArrow />
          </button>
          <SearchInput />
        </div>
        <button className="hidden md:flex items-center border-2 px-2 py-1 rounded-md text-primary-button text-sm">
          <GlobeIcon />
          Live map view
        </button>
      </div>
    </div>
  );
}

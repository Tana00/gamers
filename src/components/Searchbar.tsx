import { useState } from "react";

export const Searchbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [filterBy, setFilterBy] = useState("Playtime");
  return (
    <form className="w-2/3 m-auto">
      <div className="flex">
        {/* <label
          htmlFor="search-dropdown"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Your Email
        </label> */}
        <button
          className={`flex-shrink-0 w-36 z-10 inline-flex items-center justify-between py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-900 border rounded-l-lg ${
            showDropdown && "rounded-b-none"
          } hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-900 dark:hover:bg-gray-900 dark:focus:ring-gray-900 dark:text-white`}
          type="button"
          onClick={() => {
            setShowDropdown(!showDropdown);
            console.log(showDropdown);
          }}
        >
          {filterBy}
          <svg
            aria-hidden="true"
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`z-10 absolute top-20 ${
            showDropdown ? "block" : "hidden"
          } bg-red-600 divide-y divide-gray-100 rounded shadow w-36 dark:bg-gray-700`}
        >
          <ul
            className="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdown-button"
          >
            <li>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => {
                  setFilterBy("Playtime");
                  setShowDropdown(false);
                }}
              >
                Playtime
              </button>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => {
                  setFilterBy("Unique users");
                  setShowDropdown(false);
                }}
              >
                Unique users
              </button>
            </li>
          </ul>
        </div>
        <div className="relative w-full">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder={`search ${filterBy?.toLowerCase()}...`}
              className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md rounded-l-none outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

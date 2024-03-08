import toast from "react-hot-toast";

import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/dataContext";
import { Icon } from "@iconify/react/dist/iconify.js";

const DataFilter = () => {
  //get the data from the context and set the initial date range
  const { minDate, maxDate, initialData, filteredData, setFilteredData } =
    useContext(DataContext);
  const [fromDate, setFromDate] = useState<string>("");
  const [toDate, setToDate] = useState<string>("");

  //set the initial date range
  useEffect(() => {
    setFromDate(minDate);
    setToDate(maxDate);
  }, [minDate, maxDate]);

  //filtering the data based on the date
  useEffect(() => {
    if (fromDate < toDate) {
      const filtered = filteredData?.filter((d) => {
        return d.DateTime >= fromDate && d.DateTime <= toDate;
      });
      setFilteredData(filtered);
    } else if (fromDate >= toDate && fromDate !== "" && toDate !== "") {
      toast.error("Invalid date range");
    }
  }, [fromDate, toDate]);

  //reset the date range
  const reset = () => {
    setFromDate(minDate);
    setToDate(maxDate);
    setFilteredData(initialData);
  };

  return (
    <form className="flex lg:gap-4 lg:ml-8 lg:mt-4 mt-8 items-end justify-evenly lg:justify-normal">
      <span className="flex flex-col">
        <label
          htmlFor="toDate"
          className="font-semibold lg:text-[1.1rem] text-textdark dark:text-textlight"
        >
          From:
        </label>
        <input
          type="date"
          id="toDate"
          min={fromDate}
          max={toDate}
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          className="bg-textlight dark:bg-bgdark shadow-inner shadow-black pl-5 pr-2 lg:px-10 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-stellar transition-all duration-300 ease-in-out hover:border-stellar"
        />
      </span>
      <span className="flex flex-col">
        <label
          htmlFor="fromDate"
          className="font-semibold lg:text-[1.1rem] text-textdark dark:text-textlight"
        >
          Until:
        </label>
        <input
          type="date"
          id="fromDate"
          min={fromDate}
          max={toDate}
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          className="bg-textlight dark:bg-bgdark shadow-inner shadow-black pl-5 pr-2 lg:px-10 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-stellar transition-all duration-300 ease-in-out hover:border-stellar"
        />
      </span>
      <Icon
        icon="system-uicons:reset-alt"
        className="text-[3rem] text-textdark dark:text-textlight cursor-pointer"
        onClick={reset}
      />
    </form>
  );
};

export default DataFilter;

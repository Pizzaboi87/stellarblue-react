import { DataContext } from "../../context/dataContext";
import { useContext, useMemo, useState } from "react";
import { TimeSerie } from "../../types/types";

const defaultVisibility = {
  Germany: true,
  Greece: true,
  France: true,
};

const Table = () => {
  // Get the data from the context
  const { filteredData } = useContext(DataContext);

  // Countries to compare
  const countries = [
    { name: "Germany", code: "DE" },
    { name: "Greece", code: "GR" },
    { name: "France", code: "FR" },
  ];

  // State to hold which columns should be shown
  const [showColumns, setShowColumns] = useState<{ [key: string]: boolean }>(
    defaultVisibility
  );

  // Toggle visibility of columns by country
  const toggleColumnVisibility = (country: string) => {
    ApexCharts.exec("stellarchart", "toggleSeries", country);
    setShowColumns((prevState) => ({
      ...prevState,
      [country]: !prevState[country],
    }));
  };

  // Show all columns
  const showAllColumns = () => {
    countries.forEach((c) => {
      ApexCharts.exec("stellarchart", "showSeries", c.name);
    });
    setShowColumns(defaultVisibility);
  };

  // Show all columns when the data changes
  useMemo(() => {
    showAllColumns();
  }, [filteredData]);

  // Format the date and time
  const formatDateTime = (dateTime: string) => {
    const [date, time] = dateTime.split("T");
    return (
      <span className="col-span-2 flex flex-col md:flex-row md:gap-2">
        <p>{date}</p>
        <p className="hidden md:block md:mx-1">|</p>
        <p>{time.slice(0, -3)}</p>
      </span>
    );
  };

  return (
    <div className="grid grid-cols-5 w-full lg:w-[50%] mx-auto bg-textlight dark:bg-bgdark px-6 py-4 rounded-xl shadow-inner shadow-black mb-12">
      <div className="font-bold col-span-2 items-center">Date</div>
      {countries.map((c) => (
        <div className="font-bold flex items-center" key={c.code}>
          <p className="hidden lg:block">{c.name}</p>
          <p className="block lg:hidden">{c.code}</p>
          <input
            type="checkbox"
            checked={showColumns[c.name]}
            onChange={() => toggleColumnVisibility(c.name)}
            className="w-4 h-4 ml-2 mb-1 md:mb-0"
          />
        </div>
      ))}
      <hr className="col-span-5 mb-4 mt-2 border-black border-2" />
      {filteredData?.map((d) => (
        <div
          className="col-span-5 grid grid-cols-5 items-center"
          key={d.DateTime}
        >
          {formatDateTime(d.DateTime)}
          {countries.map((c) => (
            <span
              key={c.code}
              className={`col-start-${countries.indexOf(c) + 3} ${
                showColumns[c.name] ? "visible" : "invisible"
              }`}
            >
              {d[`ENTSOE_${c.code}_DAM_Price` as keyof TimeSerie]}
            </span>
          ))}
          <hr className="col-span-5 my-1 border-black border-1" />
        </div>
      ))}
    </div>
  );
};

export default Table;

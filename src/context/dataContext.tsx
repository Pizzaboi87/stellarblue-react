import Loading from "../components/loading/Loading";
import Failure from "../components/failure/Failure";
import useSWR from "swr";

import { DataContextType, TimeSerie } from "../types/types";
import { createContext, useMemo, useState } from "react";
import { getData } from "../utils/firebase";

// Create the context
const DataContext = createContext<DataContextType>({
  initialData: [],
  filteredData: [],
  setFilteredData: () => [],
  minDate: "",
  maxDate: "",
});

// Create the provider
const DataContextProvider = ({ children }: { children: React.ReactNode }) => {
  // Fetch the data
  const {
    data: initialData,
    error,
    isLoading,
  } = useSWR<TimeSerie[]>("timeSeries", getData);

  // State to hold the data
  const [filteredData, setFilteredData] = useState<TimeSerie[] | undefined>([]);
  const [minDate, setMinDate] = useState<string>("");
  const [maxDate, setMaxDate] = useState<string>("");

  // Memoized value for filtered data
  useMemo(() => {
    if (!initialData || !initialData.length) return [];
    setFilteredData(initialData);

    // Set min date - correction needed
    const firstDateTime = new Date(initialData[0].DateTime);
    firstDateTime.setDate(firstDateTime.getDate() + 1);

    setMinDate(firstDateTime.toISOString().split("T")[0]);

    // Set max date - correction needed
    const lastDateTime = new Date(initialData[initialData.length - 1].DateTime);
    lastDateTime.setDate(lastDateTime.getDate() + 1);

    setMaxDate(lastDateTime.toISOString().split("T")[0]);

    return initialData;
  }, [initialData]);

  // Handle error and loading state
  if (error) {
    return <Failure />;
  }

  // Show loading spinner
  if (isLoading) {
    return <Loading />;
  }

  return (
    <DataContext.Provider
      value={{
        initialData,
        filteredData,
        setFilteredData,
        minDate,
        maxDate,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };

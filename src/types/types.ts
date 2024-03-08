import { Dispatch, SetStateAction } from "react";

export type TimeSerie = {
    DateTime: string;
    ENTSOE_DE_DAM_Price: string;
    ENTSOE_FR_DAM_Price: string;
    ENTSOE_GR_DAM_Price: string;
}

export type DataContextType = {
    initialData: TimeSerie[] | undefined;
    filteredData: TimeSerie[] | undefined;
    setFilteredData: React.Dispatch<
        React.SetStateAction<TimeSerie[] | undefined>
    >;
    minDate: string;
    maxDate: string;
};

export type ThemeContextType = {
    darkTheme: boolean;
    setDarkTheme: Dispatch<SetStateAction<boolean>>;
};
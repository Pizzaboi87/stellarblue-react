import { createContext, useEffect, useState } from "react";
import { ThemeContextType } from "../types/types";

// Create the context
const ThemeContext = createContext<ThemeContextType>({
  darkTheme: false,
  setDarkTheme: () => null,
});

// Create the provider
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Get the theme from local storage
  const themeFromStorage =
    typeof localStorage !== "undefined" && localStorage.getItem("app-theme")
      ? JSON.parse(localStorage.getItem("app-theme")!)
      : false;

  // State to hold the theme
  const [darkTheme, setDarkTheme] = useState<boolean>(themeFromStorage);
  const [renderComponent, setRenderComponent] = useState<boolean>(false);

  // Save the theme to local storage
  useEffect(() => {
    setRenderComponent(true);
  }, []);

  if (!renderComponent) return <></>;

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <div
        className={`${
          darkTheme ? "dark bg-gradientdarkblue" : "bg-gradientblue"
        } min-h-screen overflow-x-hidden`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };

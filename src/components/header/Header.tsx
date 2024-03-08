import { ThemeContext } from "../../context/themeContext";
import { Icon } from "@iconify/react";
import { useContext } from "react";

const Header = () => {
  //get the dark theme and the function to set the dark theme from the context
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  //function to change the theme
  const handleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <header className="w-full py-2 px-6 bg-textlight rounded-b-xl shadow-sm shadow-black flex justify-between">
      <a href="/">
        <img src="/logo.png" alt="logo" className="h-10" />
      </a>
      <Icon
        icon={`${
          darkTheme
            ? "line-md:sun-rising-filled-loop"
            : "line-md:sunny-filled-loop-to-moon-filled-loop-transition"
        }`}
        onClick={handleTheme}
        className="ml-4 text-[3rem] cursor-pointer text-textdark"
      />
    </header>
  );
};

export default Header;

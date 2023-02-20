import { useEffect, useState } from "react";

/*
 * On app load, determines user light/dark mode
 * based on local storage or preferences
 */
const useToggle = (): [string, () => void] => {
  const [currentTheme, setTheme] = useState("light");

  const setMode = (mode: string): void => {
    window.localStorage.setItem("currentTheme", mode);
    setTheme(mode);
  };

  const themeToggle = (): void => {
    setMode(currentTheme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("currentTheme");
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setTheme(
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      );
    }
  }, []);
  return [currentTheme, themeToggle];
};

export default useToggle;

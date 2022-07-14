import React, { useEffect } from "react";
import Sun from "./../sun.png";
import Moon from "./../moon.png";

const ThemeBtn = ({ theme, setTheme, width }) => {
  useEffect(() => {
    let cookie = window.localStorage.getItem("theme");
    if (!cookie) {
      window.localStorage.setItem("theme", "light");
    } else {
      setTheme(cookie);
      window.localStorage.setItem("theme", cookie);
    }
  }, []);

  return (
    <button
      onClick={() => {
        let newTheme;
        theme === "dark" ? (newTheme = "light") : (newTheme = "dark");
        setTheme(newTheme);
        window.localStorage.setItem("theme", newTheme);
      }}
    >
      <img width={width} src={theme === "dark" ? Moon : Sun} alt="" />
    </button>
  );
};

export default ThemeBtn;

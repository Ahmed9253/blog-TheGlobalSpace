"use client";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeProvider = ({ children }) => {
  const { mode } = useContext(ThemeContext);
  return <div className={mode}>{children}</div>;
};

export default ThemeProvider;

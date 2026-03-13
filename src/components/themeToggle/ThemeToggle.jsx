"use client";
import { useContext } from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

function ThemeToggle() {
  const { toggle, mode } = useContext(ThemeContext);
  console.log(mode);
  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        mode === "dark" ? { background: "aqua" } : { background: "#0f172a" }
      }
    >
      <Image src="/moon.png" alt="" width={14} height={14} />
      <div
        className={styles.toggleCircle}
        style={
          mode === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "aqua" }
        }
      ></div>
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  );
}

export default ThemeToggle;

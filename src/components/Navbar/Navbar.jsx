import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <span>The Global Space</span>
      </Link>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/Books" className={styles.link}>
          Books
        </Link>
        <Link href="/About" className={styles.link}>
          About
        </Link>
        <Link href="/Contact" className={styles.link}>
          Contact
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
}

export default Navbar;

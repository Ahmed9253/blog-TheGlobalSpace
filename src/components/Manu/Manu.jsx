import React from "react";
import styles from "./manu.module.css";
import Link from "next/link";
import Image from "next/image";

function Manu() {
  return (
    <div className={styles.container}>
      <h3 className={styles.subtitle}>#trending</h3>
      <h2 className={styles.title}>Most Papular Blogs</h2>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={styles.category}>category</span>
            <h3 className={styles.postTitle}>title of the post</h3>
            <div className={styles.details}>
              <span className={styles.username}>username</span>
              <span className={styles.date}> - Date</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Manu;

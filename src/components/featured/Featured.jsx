import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>
          Wellcome to TechBits BlogSpace<br></br>
        </b>
        Write , Descover and Share Ideas.
      </h1>
    </div>
  );
}

export default Featured;

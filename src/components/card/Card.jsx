import Link from "next/link";
import styles from "./card.module.css";
import Image from "next/image";

function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div>
          <span className={styles.date}>Date - </span>
          <span className={styles.category}>CODING</span>
        </div>
        <h2 className={styles.title}>Title of the temp post</h2>
        <p className={styles.description}>discription of the temp post</p>
        <Link href="/post" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
}

export default Card;

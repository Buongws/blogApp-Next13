import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}> 11.02.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo magnam
          officiis aspernatur itaque numquam inventore ullam non? Natus magni
          facere deleniti debitis, error sed incidunt aspernatur ducimus
          quibusdam minus voluptatum?
        </p>
        <Link href="/">READ MORE</Link>
      </div>
    </div>
  );
};

export default Card;

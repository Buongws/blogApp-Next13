import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        {item.img && (
          <Image src={item.img} alt="" fill className={styles.image} />
        )}
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo magnam
          officiis aspernatur itaque numquam inventore ullam non? Natus magni
          facere deleniti debitis, error sed incidunt aspernatur ducimus
          quibusdam minus voluptatum?
        </p>
        <Link href={`/posts/${item.slug}`} className={styles.link}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default Card;

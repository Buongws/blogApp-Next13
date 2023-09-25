import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Image from "next/image";
import Card from "../card/Card";

const getData = async ({ page }) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const CardList = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <Card />
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;

import Link from "next/link";
import style from "./homepage.module.css";
import Feature from "@/components/feature/Feature";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";

export default function Home() {
  return (
    <div className={style.container}>
      <Feature />
      <CategoryList />
      <div className={style.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}

"use client";
import React, { useContext } from "react";
import style from "./themeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div className={style.container} onClick={toggle}>
      <Image src="/moon.png" alt="" width={14} height={14} />
      <div className={style.ball}></div>
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;

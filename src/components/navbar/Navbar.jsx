import React from "react";
import style from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLink/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className={style.logo}>Buong</div>
      <div className={style.links}>
        <ThemeToggle />
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;

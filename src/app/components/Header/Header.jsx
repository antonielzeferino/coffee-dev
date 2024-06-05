"use client"

import home from "@/public/nav-icons/home.png";
import info from "@/public/nav-icons/info.png";
import menu from "@/public/nav-icons/coffee-menu.png";
import cart from "@/public/nav-icons/coffee_cart.png";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css"
import { usePathname } from "next/navigation";

function Header() {
  const pathName = usePathname()
  const isActive = (path) => pathName === path ? styles.actived : '';

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li className={`${styles.navItem} ${isActive('/')}`}>
            <Link href="/">
              <span>
                <Image src={home} alt="home icon" width={20} />
              </span>
            </Link>
          </li>
          <li className={`${styles.navItem} ${isActive('/pages/info')}`}>
            <Link href="/pages/info">
              <span>
                <Image src={info} alt="info icon" width={20} />
              </span>
            </Link>
          </li>
          <li className={`${styles.navItem} ${isActive('/pages/menu')}`}>
            <Link href="/pages/menu">
              <span>
                <Image src={menu} alt="menu icon" width={20} />
              </span>
            </Link>
          </li>
          <li className={`${styles.navItem} ${isActive('/pages/shop')}`}>
            <Link href="/pages/shop">
              <span>
                <Image src={cart} alt="cart icon" width={20} />
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

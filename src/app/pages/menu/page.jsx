"use client";

import Image from 'next/image';
import styles from './menu.module.css';
import { useState } from 'react';
import coffeeIcon from "@/public/nav-icons/coffee-nav-icon.svg";
import snackIcon from "@/public/nav-icons/lunch-nav-icon.svg";
import takeawayIcon from "@/public/nav-icons/takeaway-nav-icon.svg";
import MenuCarousel from '@/app/components/menu/menuCarousel';

function Menu() {
  const [menuType, setMenuType] = useState("coffee");

  const handleMenuClick = (type) => {
    setMenuType(type);
  };

  return (
    <>
      <div id={styles.menu}>
        <section className={styles.navigation}>
          <h1>Discover Our Breakfast Menu</h1>
          <p>Please note that the names and images of items displayed are for illustrative purposes only. Actual products may vary in appearance, name and description.</p>
          <nav className={styles.mobileNav}>
            <ul>
              <li
                className={`${styles.menuNavList} ${menuType === "coffee" ? styles.actived : ''}`}
                onClick={() => handleMenuClick("coffee")}
              >
                <Image src={coffeeIcon} alt={"Coffee icon"} height={30} width={50} />
                <span>Coffee</span>
              </li>
              <li
                className={`${styles.menuNavList} ${menuType === "snack" ? styles.actived : ''}`}
                onClick={() => handleMenuClick("snack")}
              >
                <Image src={snackIcon} alt={"Snack icon"} height={30} width={50} />
                <span>Snacks</span>
              </li>
              <li
                className={`${styles.menuNavList} ${menuType === "takeaway" ? styles.actived : ''}`}
                onClick={() => handleMenuClick("takeaway")}
              >
                <Image src={takeawayIcon} alt={"Takeaway icon"} height={30} width={50} />
                <span>Takeaway</span>
              </li>
            </ul>
          </nav>
        </section>
        <MenuCarousel menuType={menuType} />
      </div>
    </>
  );
}

export default Menu;

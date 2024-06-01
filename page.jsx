import Image from 'next/image';
import styles from './menu.module.css'
import imagess from "@/public/favicon/favicon-32x32.png"

function Menu() {
  return (
    <div id={styles.menu}>
      <section className={styles.navigation}>
        <h1>Our menu</h1>
        <nav>
          <ul>
            <li className={styles.menuNavList}>
              <Image src={imagess} alt={"image"} height={70} width={50}/>
              <span>
                Coffee
              </span>
            </li>
            <li className={styles.menuNavList}>
              <Image src={imagess} alt={"image"} height={70} width={50}/>
              <span>
                Snacks
              </span>
            </li>
            <li className={styles.menuNavList}>
              <Image src={imagess} alt={"image"} height={70} width={50}/>
              <span>
                Takeaway
              </span>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}

export default Menu;
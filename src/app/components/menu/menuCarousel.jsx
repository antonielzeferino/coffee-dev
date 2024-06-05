import { menuData } from './menuData.js';
import ItemsCard from "../ItemsCard/ItemCard/ItemCard.jsx";
import styles from "./menuCarousel.module.css"

function MenuCarousel({ menuType }) {
  return (
    <div className={styles.menuContent}>
      <div className={menuType === "coffee" ? styles.actived : styles.smallScreenHide}>
        <h3 className={styles.carouselTitle}>Our Coffee Options</h3>
        <div className={styles.carousel}>
          {menuData.coffee.map((item) => (
            <span key={item.id}>
              <ItemsCard item={item}/>
            </span>
          ))}
        </div>
      </div>
      <div className={menuType === "snack" ? styles.actived : styles.smallScreenHide}>
        <h3 className={styles.carouselTitle}>Snacks to Start Your Day Right</h3>
        <div className={styles.carousel}>
          {menuData.snack.map((item) => (
            <span key={item.id}>
              <ItemsCard item={item}/>
            </span>
          ))}
        </div>
      </div>
      <div className={menuType === "takeaway" ? styles.actived : styles.smallScreenHide}>
        <h3 className={styles.carouselTitle}>Takeout Convenience</h3>
        <div className={styles.carousel}>
          {menuData.takeaway.map((item) => (
            <span key={item.id}>
              <ItemsCard item={item}/>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MenuCarousel;

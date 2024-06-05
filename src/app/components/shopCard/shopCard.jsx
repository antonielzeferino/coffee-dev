import Image from "next/image";
import styles from "./shopCard.module.css"

function ShopCard({ item, updateQuantity }) {
  return (
    <div className={styles.shopCard}>
      <Image src={item.url} alt={item.alt} height={80} width={60} />
      <div className={styles.cardText}>
        <h5>{item.title}</h5>
        <p>quantity:
          <br />
          <button
            className={styles.quantityBtn}
            onClick={() => updateQuantity(item.id, false)}
          >-</button>
          <span className={styles.quantity}>{item.quantity}</span>
          <button
            className={styles.quantityBtn}
            onClick={() => updateQuantity(item.id, true)}
          >+</button>
        </p>
        <p>price: <span>${item.price}</span></p>
      </div>
    </div>
  );
}

export default ShopCard;

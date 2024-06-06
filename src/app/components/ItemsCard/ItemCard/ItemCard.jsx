'use client'

import Image from "next/image";
import style from "./itemCard.module.css"
import { useState } from "react";

function ItemCard({ item }) {
  const [clicked, setClick] = useState(false);

  const handleClick = () => {
    addProduct(item);
    setClick(true);
  };

  const addProduct = (newItem) => {
    const storedItems = localStorage.getItem("coffee-storage");
    const items = storedItems ? JSON.parse(storedItems) : [];

    const addedItem = items.find((item) => item.id === newItem.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newItem.quantity = 1; // Add a quantity property to the new item
      items.push(newItem);
    }

    localStorage.setItem("coffee-storage", JSON.stringify(items));
  };

  return (
    <div className={style.itemsCard}>
      <Image src={item.url} alt={item.alt} height={150} width={160} />
      <h5>{item.title}</h5>
      <p>{item.description}</p>
      <div className={style.priceCartWrapper}>
        <p>price: <span>${item.price}</span></p>
        <button 
          className={`${style.addBtn} ${clicked ? style.clicked : ""}`}
          onClick={handleClick}
        >
          {clicked ? "added" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default ItemCard;

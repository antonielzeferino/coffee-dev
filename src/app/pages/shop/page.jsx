"use client";

import ShopCard from "@/app/components/shopCard/shopCard";
import styles from "./shop.module.css";
import { useEffect, useState } from "react";

function Shop() {
  const [storedProducts, setStoredProducts] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("coffee-storage");
    setStoredProducts(stored ? JSON.parse(stored) : []);
  }, []);

  const totalProducts = storedProducts.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const totalValues = storedProducts.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const updateQuantity = (id, add) => {
    setStoredProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product) => {
        if (product.id === id) {
          const newQuantity = add ? product.quantity + 1 : product.quantity - 1;
          return { ...product, quantity: Math.max(newQuantity, 0) };
        }
        return product;
      }).filter(product => product.quantity > 0);

      localStorage.setItem("coffee-storage", JSON.stringify(updatedProducts));
      return updatedProducts;
    });
  };

  return (
    <div className={styles.container}>
      <h2>My Shopping Bag</h2>
      <div className={styles.products}>
        <div className={styles.cards}>
          {storedProducts.length > 0 ? (
            storedProducts.map((item) => (
              <div className={styles.shopCard} key={item.id}>
                <ShopCard item={item} updateQuantity={updateQuantity} />
              </div>
            ))
          ) : (
            <div>No products added to the cart</div>
          )}
        </div>
        <div className={styles.buyInfo}>
          <h4>Purchase Summary</h4>
          <table>
            <tbody>
              <tr>
                <th>Product Types:</th>
                <td>{storedProducts.length}</td>
              </tr>
              <tr>
                <th>Total items:</th>
                <td>{totalProducts}</td>
              </tr>
              <tr>
                <th>Subtotal:</th>
                <td>${totalValues.toFixed(2)}</td>
              </tr>
              <tr>
                <th>Shipping:</th>
                <td>${totalProducts < 10 ? (totalProducts * 0.99).toFixed(2) : 0}</td>
              </tr>
              <tr>
                <th>Total Value:</th>
                <td>${(totalValues + (totalProducts < 10 ? totalProducts * 0.99 : 0)).toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.promoInfo}>
        Free shipping on orders of more than 10 products
      </div>
    </div>
  );
}

export default Shop;

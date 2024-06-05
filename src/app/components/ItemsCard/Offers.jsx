"use client"

import OfferCard from "./ItemCard/ItemCard";
import style from "./offer.module.css";
import img1 from "@/public/images/special-coffee.jpeg";
import img2 from "@/public/images/pao-de-queijo.jpeg";
import img3 from "@/public/images/café-gelado.jpeg";

const specialCoffee = {
  title: "House Special Coffee",
  text: "Enjoy our house special coffee, made with hand-picked beans and roasted to perfection to deliver the most authentic flavor.",
  url: img1,
  quantity: 0,
  alt: "Image of house special coffee",
  id: 22
}

const cheeseBread = {
  title: "Coffee and Cheese Bread Combo",
  text: "Take advantage of our exclusive combo with fresh coffee and cheese bread made on the spot, a perfect combination for any time of day.",
  url: img2,
  quantity: 0,
  alt: "Image of a coffee and cheese bread combo",
  id: 23
}

const icedCoffee = {
  title: "Iced Coffee with Milk",
  text: "Cool down with our delicious iced coffee with milk, ideal for hot days. Made with high-quality coffee and fresh milk.",
  url: img3,
  quantity: 0,  
  alt: "Image of iced coffee with milk",
  id: 24
}

function Offers() {
  return (
    <div className={style.offer}>
      <OfferCard item={specialCoffee}/>
      <OfferCard item={cheeseBread}/>
      <OfferCard item={icedCoffee}/>
    </div>
  );
}

export default Offers;

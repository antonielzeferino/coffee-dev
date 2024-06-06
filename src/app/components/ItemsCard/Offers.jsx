import OfferCard from "./ItemCard/ItemCard";
import style from "./offer.module.css";
import { menuData } from "../menu/menuData.js"

function Offers() {
  return (
    <div className={style.offer}>
      {menuData.offers.map((item) => (
        <OfferCard item={item} />
      ))}
    </div>
  );
}

export default Offers;

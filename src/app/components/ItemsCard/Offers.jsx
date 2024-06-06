import OfferCard from "./ItemCard/ItemCard";
import style from "./offer.module.css";
import { menuData } from "../menu/menuData.js"

function Offers() {
  return (
    <div className={style.offer}>
      {menuData.offers.map((item) => (
        <div key={item.id}>
          <OfferCard item={item} />
        </div>
      ))}
    </div>
  );
}

export default Offers;

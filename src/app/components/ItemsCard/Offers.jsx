import OfferCard from "./ItemCard/ItemCard";
import style from "./offer.module.css";
import coffeeImage1 from "@/public/images/special-coffee.jpeg";
import coffeeImage2 from "@/public/images/pao-de-queijo.jpeg"
import coffeeImage3 from "@/public/images/café-gelado.jpeg";
function Offers() {
  return (
    <div className={style.offer}>
      <OfferCard
        title={"House Special Coffee"}
        text={"Enjoy our house special coffee, made with hand-picked beans and roasted to perfection to deliver the most authentic flavor."}
        imgSrc={coffeeImage1}
        imgAlt={"Image of house special coffee"}
      />
      <OfferCard
        title={"Coffee and Cheese Bread Combo"}
        text={"Take advantage of our exclusive combo with fresh coffee and cheese bread made on the spot, a perfect combination for any time of day."}
        imgSrc={coffeeImage2}
        imgAlt={"Image of a coffee and cheese bread combo"}
      />
      <OfferCard
        title={"Iced Coffee with Milk"}
        text={"Cool down with our delicious iced coffee with milk, ideal for hot days. Made with high-quality coffee and fresh milk."}
        imgSrc={coffeeImage3}
        imgAlt={"Image of iced coffee with milk"}
      />
    </div>
  );
}

export default Offers;

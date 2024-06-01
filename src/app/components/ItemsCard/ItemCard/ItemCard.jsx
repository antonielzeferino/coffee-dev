import Image from "next/image";
import style from "./itemCard.module.css"

function ItemCard({ title, text, imgSrc , imgAlt}) {
  return ( 
    <div className={style.itemsCard}>
      <Image src={imgSrc} alt={imgAlt} height={150} width={160}/>
      <h5>{title}</h5>
      <p>{text}</p>
    </div>
   );
}

export default ItemCard;
import Image from "next/image";
import style from "../offer.module.css"

function OfferCard({ title, text, imgSrc , imgAlt}) {
  return ( 
    <div className={style.offerCard}>
      <Image src={imgSrc} alt={imgAlt} height={150} width={140}/>
      <h5>{title}</h5>
      <p>{text}</p>
    </div>
   );
}

export default OfferCard;
import Offers from "./components/ItemsCard/Offers";
import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.banner}>
        <h1 className={styles.bannerTitle}>
          <strong>Coffee dev</strong>  Flavor and Energy for Your Day
        </h1>
      </section>
      <section className={styles.promoSection}>
        <article>
          <h3>OUR DELICIOUS OFFER</h3>
          <p>
            Explore our exclusive range of coffee blends that cater to every taste. Whether you prefer, we have the perfect cup for you.
          </p>
        </article>
          <Offers />
      </section>

    </main>
  );
}

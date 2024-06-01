import styles from "./info.module.css";

export default function info() {
  return (
    <div className={styles.aboutUs}>
      <section className={styles.introduction}>
        <h1>About Coffee Dev</h1>
        <p className={styles.paragraph}>
          Welcome to Coffee Dev! We are a passionate group of coffee enthusiasts dedicated to providing the finest coffee experience. Our journey started with a simple love for coffee and has grown into a community of like-minded individuals who appreciate the art and science behind every cup.
        </p>
      </section>

      <section className={styles.ourStory}>
        <h2>Our Story</h2>
        <p className={styles.paragraph}>
          Founded in 2024, Coffee Dev was born out of a desire to create a space where coffee lovers could come together and enjoy exceptional coffee. We believe that coffee is more than just a beverage; it’s a way to bring people together and inspire creativity. Our team is committed to sourcing the best beans from top growers around the world and roasting them to perfection right here in our café.
        </p>
      </section>

      <section className={styles.ourMission}>
        <h2>Our Mission</h2>
        <p className={styles.paragraph}>
          At Coffee Dev, our mission is to deliver an unparalleled coffee experience. We are dedicated to quality, sustainability, and community. From the moment the beans are harvested to the final pour in your cup, we ensure every step meets our high standards. We strive to create a welcoming environment where everyone feels at home, whether you’re here for a quick coffee break or a leisurely chat with friends.
        </p>
      </section>

      <section className={styles.ourValues}>
        <h2>Our Values</h2>
        <ul>
          <li><strong>Quality:</strong> We prioritize quality in every aspect, from our beans to our brewing methods.</li>
          <li><strong>Sustainability:</strong> We are committed to sustainable practices that support the environment and the communities we source from.</li>
          <li><strong>Community:</strong> We believe in fostering a sense of community and creating a space where everyone feels welcome.</li>
          <li><strong>Innovation:</strong> We continuously seek to innovate and improve our offerings to bring you the best coffee experience.</li>
        </ul>
      </section>

      <section className={styles.ourTeam}>
        <h2>Meet Our Team</h2>
        <p className={styles.paragraph}>
          Our team is made up of passionate coffee aficionados, skilled baristas, and creative minds who all share a love for coffee. Each member brings their unique expertise and dedication to ensure that every cup of coffee served at Coffee Dev is a testament to our commitment to excellence.
        </p>
      </section>
    </div>
  );
}

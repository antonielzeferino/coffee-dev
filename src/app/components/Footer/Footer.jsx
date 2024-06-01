import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4>About Us</h4>
          <p>
            At Coffee Dev, we are passionate about providing the best coffee experience. Our beans are sourced from top growers and roasted to perfection.
          </p>
        </div>
        
        <div className={styles.footerSection}>
          <h4>Our Mission</h4>
          <p>
            Our mission is to create a welcoming environment where coffee lovers can enjoy the finest brews. We believe in quality, community, and sustainability.
          </p>
        </div>
        
        <div className={styles.footerSection}>
          <h4>Fictional Company</h4>
          <p>
            Coffee Dev is a fictional company created for demonstration purposes. Any resemblance to real businesses is purely coincidental.
          </p>
        </div>
        
        <div className={styles.footerSection}>
          <h4>Enjoy Your Coffee</h4>
          <p>
            Thank you for visiting Coffee Dev! We hope you enjoy your coffee and have a great day. Remember, the best ideas start with a great cup of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
}

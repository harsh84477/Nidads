import styles from "./Hero5.module.css";

export default function LandingPage() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.imageCard}>
          <img src="/your-image1.jpg" alt="People using smartphones" />
        </div>
        <div className={styles.valueCard}>
          <h3>Value for Users</h3>
          <ul>
            <li>Fast-track adaptation to UAE business life</li>
            <li>Confidently navigate multicultural teams & local traditions</li>
            <li>Keep your learning fun, visualized, and goal-oriented</li>
            <li>Accessible anytime, anywhere—always in your pocket!</li>
            <li>Your info is secure, and AI guidance is clearly explained</li>
          </ul>
        </div>
        <div className={styles.imageCard}>
          <img src="/your-image2.jpg" alt="User on smartphone" />
        </div>
        <div className={styles.mobileCard}>
          <img src="/your-phone-mockup.png" alt="App screen showing role selection" />
        </div>
      </div>
      <h1 className={styles.title}><span>Landing</span> Page</h1>
    </section>
  );
}

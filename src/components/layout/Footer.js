import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.centerContent}>
        <div className={styles.iconCircle}>
          <span role="img" aria-label="Thumb up">👍</span>
        </div>
        <div className={styles.title}>AI case | UI UX and Landing Page</div>
        <div className={styles.stats}>
          <span>👍 115</span>
          <span>👁️ 343</span>
          <span>💬 2</span>
        </div>
        <div className={styles.published}>Published: August 27th 2025</div>
      </div>
    </footer>
  );
}

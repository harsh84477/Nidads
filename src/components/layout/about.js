import styles from './about.module.css';

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.heroAbout}>
        <h1 className={styles.aboutTitle}>About HabibiSkills</h1>
        <p className={styles.aboutLead}>
          HabibiSkills is an intelligent mentor app that helps expats, newcomers, and professionals adapt smoothly to UAE business and culture.
        </p>
      </div>
      <div className={styles.aboutGrid}>
        <div className={styles.aboutCard}>
          <h2>Our Mission</h2>
          <p>
            Empower users to thrive in the UAE with clear, practical guidance for career success and integration.
          </p>
        </div>
        <div className={styles.aboutCard}>
          <h2>Values</h2>
          <ul>
            <li>Personalized, expert mentoring</li>
            <li>Accessible and secure advice</li>
            <li>Cultural inclusion and diversity</li>
          </ul>
        </div>
        <div className={styles.aboutCard}>
          <h2>Contact</h2>
          <p>
            Connect at info@habibiskills.com or follow us for updates.
          </p>
        </div>
      </div>
    </section>
  );
}

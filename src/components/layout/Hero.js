import styles from './Hero.module.css';

export default function Hero() {
  return (
    <main>
      <div>
        <div className={styles.hadding}>
          <div className={styles.circleImage}>
            <div className={styles.glassRectangle}>
              <p>
                HabibiSkills is an intelligent mentor app designed to help expats, newcomers, and professionals adapt smoothly to the unique business and cultural environment of the United Arab Emirates.
              </p>
            </div>
          </div>
          <h1 className={styles.NidAds} >NIDADS</h1>
        </div>
      </div>
    </main>
  );
}

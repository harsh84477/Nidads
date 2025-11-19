import React from 'react'
import styles from './Hero4.module.css'


export default function Hero3() {
  return ( 
    <div className={styles.bodyDiv}>
    <div className={styles.container}>
    <h4 className={styles.heading}>Persona Analysis</h4>
    <div className={styles.personaGrid}>
      <div className={styles.personaItem}>
        <img className={styles.personaImg} src="resident.jpg" alt="New residents and expatriates" />
        <div className={styles.personaText}>
          New residents and expatriates starting their careers or businesses in the UAE
        </div>
      </div>
      <div className={styles.personaItem}>
        <img className={styles.personaImg} src="young-professional.jpg" alt="Young professionals" />
        <div className={styles.personaText}>
          Young professionals looking to advance in a multicultural landscape
        </div>
      </div>
      <div className={styles.personaItem}>
        <img className={styles.personaImg} src="manager.jpg" alt="Managers and staff" />
        <div className={styles.personaText}>
          Managers and staff navigating local etiquette
        </div>
      </div>
      <div className={styles.personaItem}>
        <img className={styles.personaImg} src="woman-youth.jpg" alt="Women and youth" />
        <div className={styles.personaText}>
          Women and youth seeking to build future-ready soft skills
        </div>
      </div>
    </div>
     
    </div>
    </div>
  )
} 
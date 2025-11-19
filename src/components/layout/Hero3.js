import React from 'react'
import styles from './Hero3.module.css'

export default function Hero3() {
  return (
    <div className={styles.ContainerAll} >
      <div className={styles.timelineContainer}>
    <h3 className={styles.timelineTitle}>Process</h3>
    <span className={styles.timelineTitleText}>Timeline</span>
    <div className={styles.stepsGrid}>
      <div className={styles.timelineStep}>
        <span className={styles.timelineStepNumber}>1</span>
        <h3>User Research</h3>
        <p>Thorough research is undertaken to understand the needs, pain points, and expectations of expatriates and job seekers in the UAE.</p>
      </div>
      <div className={styles.timelineStep}>
        <span className={styles.timelineStepNumber}>2</span>
        <h3>Feature Definition</h3>
        <p>Key features of the app are prioritized, addressing unique UAE business and cultural challenges, and multi-language support.</p>
      </div>
      <div className={styles.timelineStep}>
        <span className={styles.timelineStepNumber}>3</span>
        <h3>User Journey Mapping</h3>
        <p>Detailed user journey maps to outline onboarding, learning paths, and ongoing support, ensuring an intuitive experience.</p>
      </div>
      <div className={styles.timelineStep}>
        <span className={styles.timelineStepNumber}>4</span>
        <h3>UX/UI Design</h3>
        <p>Modern, mobile-first user interface that is visually engaging and culturally relevant. Wireframe, logo, and brandbook development.</p>
      </div>
      <div className={styles.timelineStep}>
        <span className={styles.timelineStepNumber}>5</span>
        <h3>Prototyping and Testing</h3>
        <p>Interactive prototypes of the app tested with real users to validate the user flows and gather actionable feedback.</p>
      </div>
      <div className={styles.timelineStep}>
        <span className={styles.timelineStepNumber}>6</span>
        <h3>Content Creation</h3>
        <p>Localization content that addresses soft skills, business etiquette, and cultural nuances specific to newcomers in the UAE.</p>
      </div>
      <div className={styles.timelineStep}>
        <span className={styles.timelineStepNumber}>7</span>
        <h3>Launch Strategy</h3>
        <p>Launch strategy that includes marketing efforts to reach the target audience and promote app adoption.</p>
      </div>
    </div>
  </div>
  <div className={styles.mockupSection}>
    <span className={styles.mockupLabel}>Landing Page | Main</span>
    <br/>
    <img src="Screenshot 2025-11-17 142944.png" alt="App Landing Page Mockup" className={styles.mockupImage} />
  </div>
    </div>
  )
}


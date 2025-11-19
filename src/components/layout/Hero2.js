import React from "react";
import styles from './Hero2.module.css'

export default function Home() {
  return (
    <main>
      <div className={styles.bodyAll} >

        <div className={styles.container}>
    <h2  className={styles.heading}>AI Career &amp; Soft Skills</h2>
    <h2 style={{color:"white"}} className={styles.heading}>Mentor for the UAE</h2>
    <div className={styles.subtitle}>
      This intelligent mentor app provides personalized AI coaching and real-world simulations to foster confidence, connection, and career growth
    </div>
    <div className={styles.flexRow}>
      <div className={styles.appMockup}>
    
        <div className={styles.chip}>CAN I HELP YOU TODAY?</div>
      </div>
      <div className={styles.projectTask}>
        <div className={styles.projectTaskTitle}>Project Task</div>
        <div className={styles.projectTaskText}>
          The goal of the HabibiSkills project was to design and develop a mobile application that serves as an intelligent mentor for expatriates and newcomers in the UAE. The app aims to facilitate a smooth transition into the UAE's unique business and cultural landscape by providing personalized AI-driven guidance and practical skill-building resources.
        </div>
      </div>
    </div>
  </div>
  </div>
    </main>
  );
}
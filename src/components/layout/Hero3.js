import React from 'react'
import './Hero3.module.css'

export default function Hero3() {
  return (
    <div>
      <div className="timeline-container">
    <h3 className="timeline-title">Process</h3>
    <span className="timeline-title-text">Timeline</span>
    <div className="steps-grid">
      <div className="timeline-step">
        <span className="timeline-step-number">1</span>
        <h3>User Research</h3>
        <p>Thorough research is undertaken to understand the needs, pain points, and expectations of expatriates and job seekers in the UAE.</p>
      </div>
      <div className="timeline-step">
        <span className="timeline-step-number">2</span>
        <h3>Feature Definition</h3>
        <p>Key features of the app are prioritized, addressing unique UAE business and cultural challenges, and multi-language support.</p>
      </div>
      <div className="timeline-step">
        <span className="timeline-step-number">3</span>
        <h3>User Journey Mapping</h3>
        <p>Detailed user journey maps to outline onboarding, learning paths, and ongoing support, ensuring an intuitive experience.</p>
      </div>
      <div className="timeline-step">
        <span className="timeline-step-number">4</span>
        <h3>UX/UI Design</h3>
        <p>Modern, mobile-first user interface that is visually engaging and culturally relevant. Wireframe, logo, and brandbook development.</p>
      </div>
      <div className="timeline-step">
        <span className="timeline-step-number">5</span>
        <h3>Prototyping and Testing</h3>
        <p>Interactive prototypes of the app tested with real users to validate the user flows and gather actionable feedback.</p>
      </div>
      <div className="timeline-step">
        <span className="timeline-step-number">6</span>
        <h3>Content Creation</h3>
        <p>Localization content that addresses soft skills, business etiquette, and cultural nuances specific to newcomers in the UAE.</p>
      </div>
      <div className="timeline-step">
        <span className="timeline-step-number">7</span>
        <h3>Launch Strategy</h3>
        <p>Launch strategy that includes marketing efforts to reach the target audience and promote app adoption.</p>
      </div>
    </div>
  </div>
  <div className="mockup-section">
    <span className="mockup-label">Landing Page | Main</span>
    <br/>
    <img src="Screenshot 2025-11-17 142944.png" alt="App Landing Page Mockup" className="mockup-image" />
  </div>
    </div>
  )
}

import React from 'react'
import './Hero4.module.css'

export default function Hero3() {
  return ( 
    <div className="container">
    <h4 className="PersonaAnalysis" >Persona Analysis</h4>
    <div class="persona-grid">
      <div className="persona-item">
        <img className="persona-img" src="resident.jpg" alt="New residents and expatriates" />
        <div className="persona-text">
          New residents and expatriates starting their careers or businesses in the UAE
        </div>
      </div>
      <div className="persona-item">
        <img className="persona-img" src="young-professional.jpg" alt="Young professionals" />
        <div className="persona-text">
          Young professionals looking to advance in a multicultural landscape
        </div>
      </div>
      <div className="persona-item">
        <img className="persona-img" src="manager.jpg" alt="Managers and staff" />
        <div className="persona-text">
          Managers and staff navigating local etiquette
        </div>
      </div>
      <div className="persona-item">
        <img className="persona-img" src="woman-youth.jpg" alt="Women and youth" />
        <div className="persona-text">
          Women and youth seeking to build future-ready soft skills
        </div>
      </div>
    </div>
     
    </div>
  )
} 
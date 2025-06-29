import React from 'react'
import '../Res/Res.css'
const Res = () => {
  return (
   <>
<div className="reservation-container">
      <div className="reservation-info">
        <h2 className="section-title">Opening Hours &<br />Reservations</h2>
        
        <div className="reservation-numbers">
          <p className="label">Reservation Numbers :</p>
          <p className="number">+458-874-36-21</p>
          <p className="number">+458-471-56-36</p>
        </div>

        <div className="opening-time">
          <p className="label">Opening :</p>
          <p className="time">9 <span>PM</span> To 8 <span>AM</span></p>
        </div>
      </div>

      <div className="reservation-image">
        <img loading="lazy" 
          src="/rasturant.jpg" 
          alt="Cafe" 
        />
      </div>
    </div>
   </>
  )
}

export default Res
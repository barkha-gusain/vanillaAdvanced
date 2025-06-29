import React from 'react'
import '../Del/Delivery.css'
const Delivery = () => {
  return (
  <>
 <div className="delivery-section">
      <div className="delivery-image">
        <img loading="lazy" src="/rasturant.jpg" alt="Cake" />
      </div>

      <div className="delivery-info">
        <img loading="lazy" src="/scooter-removebg-preview (1).png" alt="Scooter" className="scooter" />
        <h3 className="delivery-text">We Delivery<br />Any Where</h3>
        <div className="phone-wrapper">
          <img loading="lazy" src="/phone2-removebg-preview.png" alt="Phone" className="phone" />
          <div className="phone-text">
            <h4>Now You Can Order<br />On Mobile Phone</h4>
          </div>
        </div>
        <button className="download-btn">Download Now</button>
      </div>
    </div>

  </>
  )
}

export default Delivery
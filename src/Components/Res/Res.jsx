import React from 'react'
import '../Res/Res.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger,useGSAP)
const Res = () => {
useGSAP(() => {
    // Animate left info block
    gsap.from('.reservation-info', {
      scrollTrigger: {
        trigger: '.reservation-info',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      x: -80,
      duration: 1,
      ease: 'power2.out',
    });

    // Animate right image
    gsap.from('.reservation-image', {
      scrollTrigger: {
        trigger: '.reservation-image',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      x: 80,
      duration: 1,
      ease: 'power2.out',
      delay: 0.3,
    });
  }, []);


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
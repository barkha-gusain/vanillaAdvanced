import React from 'react'
import '../Del/Delivery.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger, useGSAP)
const Delivery = () => {

    useGSAP(() => {
    gsap.from('.delivery-image img', {
      scrollTrigger: {
        trigger: '.delivery-section',
        start: 'top 80%',
      },
      opacity: 0,
      x: -100,
      duration: 1,
      ease: 'power2.out',
    });

    gsap.from('.scooter', {
      scrollTrigger: {
        trigger: '.scooter',
        start: 'top 85%',
      },
      opacity: 0,
      y: -50,
      duration: 1,
      delay: 0.2,
    });

    gsap.from('.delivery-text', {
      scrollTrigger: {
        trigger: '.delivery-text',
        start: 'top 85%',
      },
      opacity: 0,
      x: 50,
      duration: 1,
      delay: 0.4,
    });

    gsap.from('.phone-wrapper', {
      scrollTrigger: {
        trigger: '.phone-wrapper',
        start: 'top 85%',
      },
      opacity: 0,
      x: 50,
      duration: 1,
      delay: 0.6,
    });

    gsap.from('.download-btn', {
      scrollTrigger: {
        trigger: '.download-btn',
        start: 'top 85%',
      },
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.8,
    });
  }, []);


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
import React from 'react'
import '../Footer/Footer.css'

gsap.registerPlugin(ScrollTrigger, useGSAP)

import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
const Footer = () => {

 useGSAP(() => {
    gsap.from('.title', {
      scrollTrigger: {
        trigger: '.title',
        start: 'top 85%',
      },
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power2.out'
    });

    gsap.from('.description', {
      scrollTrigger: {
        trigger: '.description',
        start: 'top 85%',
      },
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.2,
    });

    gsap.from('.new-title', {
      scrollTrigger: {
        trigger: '.new-title',
        start: 'top 90%',
      },
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.4,
    });

    gsap.from('.email-form', {
      scrollTrigger: {
        trigger: '.email-form',
        start: 'top 90%',
      },
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.6,
    });

    gsap.from('.social-icons > *', {
      scrollTrigger: {
        trigger: '.social-icons',
        start: 'top 90%',
      },
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 0.8,
      delay: 0.8,
    });
  }, []);

  return (
    <>
<div className="vanilla-container-2">
      <div className="overlay">
        <div className="text-content">
          <h2 className="title">Vanilla</h2>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur. Senectus tellus rutrum viverra ultrices. Elementum odio hendrerit vitae morbi auctor cursus enim. Quisque et nibh tincidunt in tellus. Ut consectetur orci euismod magnis amet lorem sit vivamus cras.
          </p>
          <h3 className="new-title">All New in <span>Vanilla</span></h3>
          <form className="email-form">
            <input type="email" placeholder="Your Email" />
          </form>
        </div>

        <div className="footer">
          <div className="follow-us">
            <p>Follow us</p>
            <div className="social-icons">
              <FaFacebookF />
              <FaXTwitter />
              <FaInstagram />
            </div>
          </div>
          <p className="copyright">© 2023 , All Rights Reserved</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer
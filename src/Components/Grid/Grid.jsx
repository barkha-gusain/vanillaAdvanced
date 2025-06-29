import React from 'react'
import '../Grid/Grid.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP)

const Grid = () => {


  useGSAP(() => {
    gsap.from('.news-card', {
      scrollTrigger: {
        trigger: '.news-grid',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out'
    });

    gsap.from('.news-title', {
      scrollTrigger: {
        trigger: '.news-title',
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power1.out'
    });
  }, []);


  return (
    <><div className="news-container">
      <h2 className="news-title">Last News</h2>
      <div className="news-grid">
        {/* Row 1 */}
        <div className="news-card image-card">
          <img src="/cccccc.jpg" alt="Croissant" />
        </div>
        <div className="news-card text-card">
          <p>
            Raise your breakfast game with our easy and inventive croissant fillings –
            pack your pastries with ricotta and blueberry, ham and cheese, Nutella,
            blackberries or even a Full English breakfast.
          </p>
        </div>

        {/* Row 2 */}
        <div className="news-card text-card">
          <p>
            These Red, White, & Blue Lemon Berry Cream Mini Tarts are perfect to celebrate
            the 4th of July. Cream lemon filling is topped with vanilla whipped mascarpone cream,
            fresh berries, and meringue kisses.
          </p>
        </div>
        <div className="news-card image-card">
          <img src="/cccccc.jpg" alt="Berry Tart" />
        </div>
      </div>
    </div></>
  )
}

export default Grid;

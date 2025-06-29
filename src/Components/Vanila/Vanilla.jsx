import React from 'react'
import '../Vanila/Vanilla.css'
import { FaIceCream } from 'react-icons/fa';
import { MdCake } from 'react-icons/md';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger, useGSAP)
const Vanilla = () => {
 useGSAP(() => {
    // Animate top text
    gsap.from('.vanilla-left h2', {
      scrollTrigger: {
        trigger: '.vanilla-left h2',
        start: 'top 90%',
      },
      opacity: 0,
      x: -50,
      duration: 1,
    });

    gsap.from('.vanilla-right p', {
      scrollTrigger: {
        trigger: '.vanilla-right p',
        start: 'top 90%',
      },
      opacity: 0,
      x: 50,
      duration: 1,
    });

    // Divider animation
    gsap.from('.menu-heading', {
      scrollTrigger: {
        trigger: '.menu-heading',
        start: 'top 85%',
      },
      opacity: 0,
      y: 30,
      duration: 1,
    });

    // Animate menu columns
    gsap.from('.menu-column', {
      scrollTrigger: {
        trigger: '.menu-container',
        start: 'top 80%',
      },
      opacity: 0,
      y: 50,
      stagger: 0.3,
      duration: 1,
      ease: 'power2.out'
    });
  }, []);

  return (
    <>
           <div className="vanilla-container">
      <div className="vanilla-top">
        <div className="vanilla-left">
          <h2>MADE FOR YOU</h2>
          <p className="with-love">With Love</p>
        </div>
        <div className="vanilla-right">
          <p>
            Lorem ipsum dolor sit amet consectetur. Vel mi lorem mauris at. Ornare euismod lacus magna et amet rhoncus.
            In duis nunc platea nulla sagittis turpis et. Quis ac etiam dui tellus dolor facilisi.
          </p>
        </div>
      </div>
<div className="divider">
  
      <div className="vanilla-divider"></div>
      <h2 className="menu-heading">OUR Menu</h2>
      <div className="vanilla-divider"></div>
</div>

      

      <div className="menu-container">
      <div className="menu-child glass">
      <div className="menu-column one ">
        <div className="menu-title pink">Cakes</div>
        <ul>
          <li><MdCake className="icon pink-icon" />Cheese Cake</li>
          <li><MdCake className="icon pink-icon" />Waffles & Fruits</li>
          <li><MdCake className="icon pink-icon" />Cinnamon</li>
          <li><MdCake className="icon pink-icon" />Molten Cake</li>
        </ul>
      </div>

      <div className="menu-column one ">
        <div className="menu-title pink">Ice Cream</div>
        <ul>
          <li><FaIceCream className="icon green-icon" />Ice Cream Rolls</li>
          <li><FaIceCream className="icon green-icon" />Ice Cream Cups</li>
          <li><FaIceCream className="icon green-icon" />Ice Cream Cone</li>
          <li><FaIceCream className="icon green-icon" />Ice Cream Cone Cupcake</li>
        </ul>
      </div>

      <div className="menu-column ">
        <div className="menu-title pink">Juice</div>
        <ul>
          <li><FaIceCream className="icon yellow-icon" />Smooth max berry</li>
          <li><FaIceCream className="icon yellow-icon" />Smooth Straw Berry</li>
          <li><FaIceCream className="icon yellow-icon" />Smooth Mango Berry</li>
          <li><FaIceCream className="icon yellow-icon" />Milkshake Ice Coffee</li>
        </ul>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Vanilla
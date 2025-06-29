import React from 'react'
import '../Home/Home.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)
const Home = () => {

  useGSAP(() => {
    const tl = gsap.timeline();
  
    tl.from(".hero-content h1", { y: 40, opacity: 0, duration: 0.5,delay:0.5 })
      .from(".hero-content p", { y: 40, opacity: 0, duration: 0.5 }, "-=0.4")
      .from(".hero-content button", { y: 30, opacity: 0, duration: 0.4 }, "-=0.3");
  }, []);
  return (
     <div className="hero-section">
      <div className="hero-content">
        <h1>It's Time for</h1>
        <p>Perfect Dessert</p>
        <button>Order Now</button>
      </div>
    </div>
  )
}

export default Home
import React from 'react';
import '../Card/Card.css';
import { FaHeart, FaShoppingBag } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger,useGSAP);



const Card = () => {

  const cards = [
    { id: 1, title: "Vanilla Bliss", subtitle: "Soft & Elegant", price: "₹299 only", img: "/cake1.webp" },
    { id: 2, title: "Choco Charm", subtitle: "Rich & Velvety", price: "₹349 only", img: "/cake1.webp" },
    { id: 3, title: "Strawberry Pop", subtitle: "Fresh & Fruity", price: "₹319 only", img: "/cake1.webp" },
    { id: 4, title: "Cheese Dream", subtitle: "Creamy Delight", price: "₹379 only", img: "/cake1.webp" },
    { id: 5, title: "Macaron Magic", subtitle: "Color Splash", price: "₹259 only", img: "/cake1.webp" },
    { id: 6, title: "Desi Laddu", subtitle: "Festive Treat", price: "₹199 only", img: "/cake1.webp" }
  ];

 
  useGSAP(() => {
    gsap.from(".sweet-card", {
      scrollTrigger: {
        trigger: ".grid-wrapper",
        start: "top 80%",
      },
      opacity: 0,
      y: 60,
      duration: 1,
      stagger: 0.4,
      ease: "power2.out"
    });
  }, []);



  return (
    <div className="main-grid">
      <h2>Discover All Vanila Corner</h2>
      <div className="grid-wrapper">
        {cards.map((card) => (
          <div className="sweet-card" key={card.id}>
            <div className="card-heart"><FaHeart /></div>
            <img loading="lazy" src={card.img} alt={card.title} className="card-image" />
            <div className="card-text">
              <h3>{card.title}</h3>
              <p>{card.subtitle}</p>
              <p>{card.price}</p>
            </div>
            <div className="card-bag"><FaShoppingBag /></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;

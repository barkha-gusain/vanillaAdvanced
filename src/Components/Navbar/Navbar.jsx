// Navbar.jsx
import React, {  useState } from 'react';
import './Navbar.css';
import {
  FaHome,
  FaInfoCircle,
  FaShoppingBag,
  FaUtensils,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import { Link } from 'react-scroll';  // ✅ Use this now
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger)




const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

useGSAP(() => {
  const tl = gsap.timeline();

  tl.from(".navbar-logo", { y: -50, opacity: 0, duration: 0.5, ease: "power2.out" })
    .from(".navbar-links li", { y: -20, opacity: 0, stagger: 0.3, duration: 0.4 }, "-=0.3")
    .from(".menu-icon", { y: -50, opacity: 0, duration: 0.4 }, "-=0.5");
}, []);
  
 


  return (
    <nav className="navbar">
      <div className="navbar-header">
        <div className="navbar-logo">Vanilla</div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li onClick={closeMenu}>
          <FaHome />
          <Link to="home" smooth={true} duration={700}>Home</Link>
        </li>
        <li onClick={closeMenu}>
          <FaUtensils />
          <Link to="card" smooth={true} duration={700}>Card</Link>
        </li>
        <li onClick={closeMenu}>
          <FaInfoCircle />
          <Link to="grid" smooth={true} duration={700}>Grid</Link>
        </li>
        <li onClick={closeMenu}>
          <FaShoppingBag />
          <Link to="res" smooth={true} duration={700}>Res</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

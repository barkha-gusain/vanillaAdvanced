import React from 'react'
import '../Footer/Footer.css'

import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
const Footer = () => {
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
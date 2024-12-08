import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>All Your Collection</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
        <a href="https://www.instagram.com/akashroutofficial">

            <img src={instagram_icon} alt="" href="https://www.instagram.com/akashroutofficial"  /></a>
        </div>
        <div className="footer-icons-container">
            <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icons-container">
        <a href="https://wa.me/6370034585?text=Hello%20there!" >
            <img src={whatsapp_icon} alt="" /></a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer

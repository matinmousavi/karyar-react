import React from 'react'
import "./Footer.css"
import SearchbarInput from '../../kit/SearchbarInput/SearchbarInput'
import SquareBox from '../../kit/SquareBox/SquareBox'
import { FaFacebookF, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__newsletter">
        <p className='footer__newsletter-title'>
          Sign Up for the
          <span>newsletter</span>
        </p>
        <SearchbarInput action="footer" />
        <div className="social-media__wrapper">
          <SquareBox content={<FaFacebookF />} />
          <SquareBox content={<FaTwitter />} />
          <SquareBox content={<FaInstagram />} />
          <SquareBox content={<FaPinterest />} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
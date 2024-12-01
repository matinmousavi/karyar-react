import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <div className="container">
          <ul className="navbar__list">
            <li className="navbar__item">
              <a href="#" className='navbar__link navbar__link--active'>Home</a>
            </li>
            <li className="navbar__item">
              <a href="#" className='navbar__link'>Hot Deals</a>
            </li>
            <li className="navbar__item">
              <a href="#" className='navbar__link'>Categories</a>
            </li>
            <li className="navbar__item">
              <a href="#" className='navbar__link'>Laptops</a>
            </li>
            <li className="navbar__item">
              <a href="#" className='navbar__link'>Smartphones</a>
            </li>
            <li className="navbar__item">
              <a href="#" className='navbar__link'>Cameras</a>
            </li>
            <li className="navbar__item">
              <a href="#" className='navbar__link'>Accessories</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
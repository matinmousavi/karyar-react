import React, { useState } from 'react'
import "./Searchbar.css"
import { FaCartShopping } from 'react-icons/fa6'
import { FaRegHeart } from 'react-icons/fa'
import DropdownButton from '../../../kit/DropdownButton/DropdownButton'
import Dropdown from '../../../kit/Dropdown/Dropdown'

const Searchbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <div className='searchbar'>
        <div className="container">
          <div className="searchbar__content">
            <div className='searchbar__logo'>
              <h1>Electro<span className=''>.</span></h1>
            </div>
            <div className='searchbar__form'>
              <div className="searchbar__form-categories"  onClick={toggleDropdown}>
                <span>All Categories</span>
                <DropdownButton
                  className="searchbar__form-categories-button"
                />
                {isDropdownOpen&& <Dropdown />}
              </div>
              <div className="searchbar__form-input">
                <input type="text" placeholder='Search here' />
              </div>
              <button className="searchbar__form-button">Search</button>
            </div>
            <div className='searchbar__icons'>
              <div className='searchbar__icon'>
                <FaRegHeart />
                <span className='searchbar__icon-title'>Your Wishlist</span>
                <span className='badge'>2</span>
              </div>
              <div className='searchbar__icon'>
                <FaCartShopping />
                <span className='searchbar__icon-title'>Your Cart</span>
                <span className='badge'>3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Searchbar
import React from 'react'
import "./Searchbar.css"
import { FaCartShopping } from 'react-icons/fa6'
import { FaRegHeart } from 'react-icons/fa'
import SearchbarInput from '../../../kit/SearchbarInput/SearchbarInput'

const Searchbar = () => {
  return (
    <>
      <div className='searchbar'>
        <div className="container">
          <div className="searchbar__content">
            <div className='searchbar__logo'>
              <h1>Electro<span className=''>.</span></h1>
            </div>
            <SearchbarInput action="header" />
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
import React from 'react'
import "./Dropdown.css"

const Dropdown = () => {
  return (
    <ul className='searchbar__form-categories-list'>
      <li className="searchbar__form-categories-item">Laptops</li>
      <li className="searchbar__form-categories-item">Smartphones</li>
      <li className="searchbar__form-categories-item">Cameras</li>
      <li className="searchbar__form-categories-item">Accessories</li>
    </ul>
  )
}

export default Dropdown
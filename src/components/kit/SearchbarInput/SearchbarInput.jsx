import React, { useState } from 'react'
import "./SearchbarInput.css"
import DropdownButton from '../DropdownButton/DropdownButton';
import Dropdown from '../Dropdown/Dropdown';

const SearchbarInput = ({ action }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <div className={`searchbar__form ${action === "footer" ? 'searchbar__form-border' : ''}`} style={{ width: `${action === "footer" ? '30%' : '50%'}` }}>
            {
                action === "header" && <div className={`searchbar__form-categories ${action === 'header' ? 'border-left-radius' : ''}`} onClick={toggleDropdown}>
                    <span>All Categories</span>
                    <DropdownButton
                        className="searchbar__form-categories-button"
                    />
                    {isDropdownOpen && <Dropdown />}
                </div>
            }
            <div className={`searchbar__form-input ${action === 'footer' ? 'border-left-radius' : ''}`}>
                <input type="text" placeholder='Search here' className={`${action === 'footer' ? 'border-left-radius' : ''}`} />
            </div>
            <button className="searchbar__form-button">Search</button>
        </div>
    )
}

export default SearchbarInput
import React from 'react'
import Topbar from './Topbar/Topbar'
import Searchbar from './Searchbar/Searchbar'
import Navbar from './Navbar/Navbar'
import Breadcrumb from './Breadcrumb/Breadcrumb'

const Header = () => {
    return (
        <header className='header'>
            <Topbar />
            <Searchbar />
            <Navbar />
            <Breadcrumb />
        </header>
    )
}

export default Header
import { FaAngleDown, FaDollarSign, FaPhoneAlt, FaRegHeart, FaRegUser } from 'react-icons/fa'
import './App.css'
import { MdLocationOn, MdOutlineMail } from 'react-icons/md'
import { FaCartShopping } from 'react-icons/fa6'

function App() {
  return (
    <>
      <header className='header'>
        {/* top bar */}
        <div className='topbar'>
          <div className="container">
            <div className="topbar__content">
              <div className="topbar__left">
                <ul className="topbar__list">
                  <li className="topbar__item">
                    <FaPhoneAlt />
                    <span>+02195-51-84</span>
                  </li>
                  <li className="topbar__item">
                    <MdOutlineMail />
                    <span>email@email.com</span>
                  </li>
                  <li className="topbar__item">
                    <MdLocationOn />
                    <span>1734 Stonecoal Road</span>
                  </li>
                </ul>
              </div>
              <div className="topbar__right">
                <ul className="topbar__list">
                  <li className="topbar__item">
                    <FaDollarSign />
                    <span>USD</span>
                  </li>
                  <li className="topbar__item">
                    <FaRegUser />
                    <span>My Account</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* search bar */}
        <div className='searchbar'>
          <div className="container">
            <div className="searchbar__content">
              <div className='searchbar__logo'>
                <h1>Electro<span className=''>.</span></h1>
              </div>
              <div className='searchbar__form'>
                <div className="searchbar__form-categories">
                  <span>All Categories</span>
                  <button>
                    <FaAngleDown />
                  </button>
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
        {/* navbar */}
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
        {/* breadcrumb */}
        <div className='breadcrumb'>
          <div className="container">
            <ul className="breadcrumb__list">
              <li className="breadcrumb__item">
                <a href="#" className='breadcrumb__link'>Home</a>
                <span>/</span>
              </li>
              <li className="breadcrumb__item">
                <a href="#" className='breadcrumb__link'>All Categories</a>
                <span>/</span>
              </li>
              <li className="breadcrumb__item">
                <a href="#" className='breadcrumb__link'>Accessories</a>
                <span>/</span>
              </li>
              <li className="breadcrumb__item">
                <a href="#" className='breadcrumb__link breadcrumb__link--active'>Headphones (227,490 Results)</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className="container">
        <main className='main'>

        </main>
      </div>
      <footer className='footer'>
        <div className="container">

        </div>
      </footer>
    </>
  )
}

export default App

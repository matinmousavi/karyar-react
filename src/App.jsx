import { FaDollarSign, FaPhoneAlt, FaRegHeart, FaRegUser } from 'react-icons/fa'
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
              <div className='searchbar__input'></div>
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
        {/* navigation bar */}
        <nav className='navbar'></nav>
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

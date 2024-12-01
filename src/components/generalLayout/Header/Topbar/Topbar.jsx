import React from 'react'
import "./Topbar.css"
import { FaDollarSign, FaPhoneAlt, FaRegUser } from 'react-icons/fa'
import { MdLocationOn, MdOutlineMail } from 'react-icons/md'
import TopbarItem from '../../../kit/TopbarItem/TopbarItem'

const Topbar = () => {
  return (
    <>
      <div className='topbar'>
        <div className="container">
          <div className="topbar__content">
            <div className="topbar__left">
              <ul className="topbar__list">
                <TopbarItem icon={FaPhoneAlt} title="+02195-51-84" />
                <TopbarItem icon={MdOutlineMail} title="email@email.com" />
                <TopbarItem icon={MdLocationOn} title="1734 Stonecoal Road" />
              </ul>
            </div>
            <div className="topbar__right">
              <ul className="topbar__list">
                <TopbarItem icon={FaDollarSign} title="USD" />
                <TopbarItem icon={FaRegUser} title="My Account" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Topbar
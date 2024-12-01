import React from "react";
import  "./TopbarItem.css"

const TopbarItem = ({ icon: Icon, title }) => (
  <li className="topbar__item">
    <Icon />
    <span>{title}</span>
  </li>
);

export default TopbarItem;

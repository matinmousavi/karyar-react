import React from "react";
import "./DropdownButton.css"
import { FaAngleDown } from "react-icons/fa";

const DropdownButton = ({ className, style }) => {
  return (
    <button
      className={className}
      style={style}>
      <FaAngleDown />
    </button>
  );
};

export default DropdownButton;

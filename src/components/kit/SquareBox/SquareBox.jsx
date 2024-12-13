import React from 'react'
import "./SquareBox.css"

const SquareBox = ({ content, className }) => {
    return (
        <span className={`square-bax ${className}`}>{content}</span>
    )
}

export default SquareBox
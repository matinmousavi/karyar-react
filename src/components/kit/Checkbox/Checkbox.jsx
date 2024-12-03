import React from 'react'
import "./Checkbox.css"

const Checkbox = ({ label, count , id}) => {
    return (
        <div className='checkboxes-wrapper'>
            <input type="checkbox" className='checkbox-input' id={id} />
            <label htmlFor={id} className='checkbox-label'>
                {label}
                <span>({count})</span>
            </label>
        </div>
    )
}

export default Checkbox
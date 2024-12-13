import React from 'react';
import "./SelectInput.css"
import DropdownButton from '../DropdownButton/DropdownButton';

const SelectInput = ({ options, selectId, optionValues, label  , width }) => {
    return (
        <div className='select__wrapper' style={{width:  width}}>
            <label htmlFor={selectId} className='select__label'>{label}</label>
            <div className="select-input__wrapper">
                <select name={selectId} id={selectId} className='select-input'>
                    {
                        options.map((option, index) => {
                            return <option key={index} value={optionValues[index]} className='select-option'>
                                {option}
                            </option>
                        })
                    }
                </select>
                <DropdownButton
                    className="searchbar__form-categories-button"
                />
            </div>
        </div>
    );
}

export default SelectInput;

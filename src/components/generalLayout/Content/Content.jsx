import React, { useState, useEffect } from 'react';
import Checkbox from '../../kit/Checkbox/Checkbox';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import './Content.css';
import DropdownButton from '../../kit/DropdownButton/DropdownButton';
import { MdViewList } from 'react-icons/md';
import { TfiLayoutGrid3Alt } from 'react-icons/tfi';

const Content = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [values, setValues] = useState([minPrice, maxPrice]);

  const handleRangeChange = (newValues) => {
    setValues(newValues);
    setMinPrice(newValues[0]);
    setMaxPrice(newValues[1]);
  };

  const handleMinPriceChange = (e) => {
    const newMin = Number(e.target.value.replace(/,/g, ''));
    if (!isNaN(newMin) && newMin >= 0 && newMin <= maxPrice) {
      setMinPrice(newMin);
      setValues([newMin, maxPrice]);
    }
  };

  const handleMaxPriceChange = (e) => {
    const newMax = Number(e.target.value.replace(/,/g, ''));
    if (!isNaN(newMax) && newMax >= minPrice) {
      setMaxPrice(newMax);
      setValues([minPrice, newMax]);
    }
  };

  const increaseMinPrice = () => {
    if (minPrice < maxPrice) {
      const newMin = minPrice + 1;
      setMinPrice(newMin);
      setValues([newMin, maxPrice]);
    }
  };

  const decreaseMinPrice = () => {
    if (minPrice > 0) {
      const newMin = minPrice - 1;
      setMinPrice(newMin);
      setValues([newMin, maxPrice]);
    }
  };

  const increaseMaxPrice = () => {
    const newMax = maxPrice + 1;
    setMaxPrice(newMax);
    setValues([minPrice, newMax]);
  };

  const decreaseMaxPrice = () => {
    if (maxPrice > minPrice) {
      const newMax = maxPrice - 1;
      setMaxPrice(newMax);
      setValues([minPrice, newMax]);
    }
  };

  useEffect(() => {
    setValues([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  return (
    <div className="container">
      <main className="main">
        <div className="filter-products">
          {/* checkboxes component */}
          <div className="checkboxes">
            <form action="#" className="filter__form">
              <h2 className="filter__form">categories</h2>
              <Checkbox label="Laptops" count={120} id="laptops" />
              <Checkbox label="Smartphones" count={740} id="smartphones" />
              <Checkbox label="Cameras" count={1450} id="cameras" />
              <Checkbox label="Accessories" count={578} id="accessories" />
            </form>
          </div>

          {/* price component */}
          <div className="price">
            <form action="#" className="filter__form">
              <h2 className="filter__form">price</h2>
              <RangeSlider
                value={values}
                min={0}
                max={5000000}
                onInput={handleRangeChange}
              />
              <div className="number-input__wrapper">
                {/* number input component */}
                <div className="number-input">
                  <div className="number-input__span">
                    <input
                      type="text"
                      value={minPrice.toLocaleString()}
                      onChange={handleMinPriceChange}
                    />
                  </div>
                  <div className="number-input__buttons">
                    <span onClick={increaseMinPrice}>+</span>
                    <span onClick={decreaseMinPrice}>-</span>
                  </div>
                </div>
                <div className="number-input">
                  <div className="number-input__span">
                    <input
                      type="text"
                      value={maxPrice.toLocaleString()}
                      onChange={handleMaxPriceChange}
                    />
                  </div>
                  <div className="number-input__buttons">
                    <span onClick={increaseMaxPrice}>+</span>
                    <span onClick={decreaseMaxPrice}>-</span>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* checkboxes component */}
          <div className="checkboxes">
            <form action="#" className="filter__form">
              <h2 className="filter__form">brand</h2>
              <Checkbox label="SAMSUNG" count={578} id="sumsung" />
              <Checkbox label="LG" count={125} id="lg" />
              <Checkbox label="SONY" count={755} id="sony" />
            </form>
          </div>
        </div>

        {/* products component */}
        <div className="products">
          <div className="products__header">
            <div className="products__header-view">
              {/* selectInput component */}
              <div className='select__wrapper'>
                <label htmlFor="" className='select__label'>sort by:</label>
                <div className="select-input__wrapper">
                  <select name="" id="" className='select-input'>
                    <option value="" className='select-option'>Popular</option>
                    <option value="" className='select-option'>Most Expensive</option>
                    <option value="" className='select-option'>Cheapest</option>
                  </select>
                  <DropdownButton
                    className="searchbar__form-categories-button"
                  />
                </div>
              </div>
              <div className='select__wrapper'>
                <label htmlFor="" className='select__label'>show:</label>
                <div className="select-input__wrapper">
                  <select name="" id="" className='select-input' style={{width:"60px"}}>
                    <option value="" className='select-option'>10</option>
                    <option value="" className='select-option'>15</option>
                    <option value="" className='select-option'>20</option>
                  </select>
                  <DropdownButton
                    className="searchbar__form-categories-button"
                  />
                </div>
              </div>
            </div>
            <div className="products__header-icons">
              <div className='products__header-icon--active'>
                <TfiLayoutGrid3Alt className='products__header-icon' />
              </div>
              <div>
                <MdViewList className='products__header-icon' />
              </div>
            </div>
          </div>
          <div className="products__body"></div>
        </div>
      </main>
    </div>
  );
};

export default Content;

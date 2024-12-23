import "./Home.css"
import React, { useState, useEffect } from 'react';
import Checkbox from '../../components/kit/Checkbox/Checkbox';
import RangeSlider from 'react-range-slider-input';
import { MdViewList } from 'react-icons/md';
import { TfiLayoutGrid3Alt } from 'react-icons/tfi';
import ProductCart from "./components/ProductCart/ProductCart";
import { FaAngleRight } from "react-icons/fa";
import SquareBox from "../../components/kit/SquareBox/SquareBox.jsx";
import { useNavigate } from "react-router-dom";
import SelectInput from "../../components/kit/SelectInput/SelectInput.jsx";
import Loader from "../../components/app/Loader/Loader.jsx";
import useFetch from "../../hooks/useFetch.js";

const Home = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [values, setValues] = useState([minPrice, maxPrice]);
  const {data , loading }= useFetch("/products")
  
  const handleRangeChange = (newValues) => {
    setValues(newValues);
    setMinPrice(newValues[0]);
    setMaxPrice(newValues[1]);
  };

  const navigate = useNavigate()

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
    <>
      {
        !loading ? (
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
                    <SelectInput
                      width="60%"
                      label="sort by:"
                      options={["Popular", "Most Expensive", "Cheapest"]}
                      optionValues={["popular", "most-expensive", "cheapest"]}
                      selectId="sort"
                    />
                    <SelectInput
                      width="40%"
                      label="Show:"
                      options={["10", "15", "20"]}
                      optionValues={["10", "15", "20"]}
                      selectId="show"
                    />
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
                <div className="products__body">
                  {
                    data?.products?.map(product =>
                      <ProductCart
                        key={product?._id}
                        img={product?.images[0]}
                        productCategory={product?.category.name}
                        price={product?.price.toFixed(2)}
                        productName={product?.name}
                        onClick={() => navigate(`/product/${product?.id}`)}
                      />
                    )
                  }
                  <div className='products__footer'>
                    <span className='products__footer-span'>SHOPING 20-100 PRODUCTS</span>
                    <div className='products__footer-pagination'>
                      <SquareBox className='products__footer-pagination--active' content={1} />
                      <SquareBox content={2} />
                      <SquareBox content={3} />
                      <SquareBox content={4} />
                      <SquareBox content={<FaAngleRight />} />
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        )
          :
          <Loader />
      }
    </>
  )
}

export default Home
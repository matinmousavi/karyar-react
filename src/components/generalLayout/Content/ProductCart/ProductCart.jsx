import React from 'react'
import "./ProductCart.css"
import { FaStar } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import { IoEyeSharp } from 'react-icons/io5';

const ProductCart = ({ img, productName, price, oldPrice , rate }) => {
    return (
        <div className='product_cart'>
            <div className='product_cart_top'>
                <span className='product_cart_off'>-30%</span>
                <span className='product_cart_new'>NEW</span>
            </div>
            <div className='product_cart_image'>
                <img src={img} alt="product-image" />
            </div>
            <p className='product_cart_category'>CATEGORY</p>
            <p className='product_cart_description'>{productName}</p>
            <div className='product_cart_discount'>
                <span className='product_cart_discount_main'>${price}</span>
                <del className='product_cart_discount_delet'>${oldPrice}</del>
            </div>
            <div className='product_cart_stars'>
                {Array.from({ length: rate }, (_, index) => (
                    <FaStar key={index} />
                ))}
            </div>
            <div className='product_cart_footer_icons'>
                <CiHeart />
                <FaArrowRightArrowLeft />
                <IoEyeSharp />
            </div>

            <div className='product_cart_add'>
                <button className='product_cart_add_btn'>ADD TO CART</button>
            </div>
        </div>
    )
}

export default ProductCart
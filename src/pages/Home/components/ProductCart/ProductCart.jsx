import React from 'react'
import "./ProductCart.css"
import { CiHeart } from 'react-icons/ci';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import { IoEyeSharp } from 'react-icons/io5';
import { useState } from 'react';

const ProductCart = ({ img, productName, price, productCategory, onClick }) => {
    const [isLoadingImg, setIsLoadingImg] = useState(true);
    // console.log(isLoadingImg);
    
    return (
        <div className='product_cart' onClick={onClick}>
            <div className='product_cart_top'>
                <span className='product_cart_off'>-30%</span>
                <span className='product_cart_new'>NEW</span>
            </div>
            <div className='product_cart_image'>
                <img src={img} alt="product-image" onLoad={() => { setIsLoadingImg(false) }} />
            </div>
            <p className='product_cart_category'>{productCategory}</p>
            <p className='product_cart_description'>{productName}</p>
            <div className='product_cart_discount'>
                <span className='product_cart_discount_main'>${price}</span>
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
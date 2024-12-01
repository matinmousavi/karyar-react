import React from 'react'
import "./Breadcrumb.css"

const Breadcrumb = () => {
    return (
        <>
            <div className='breadcrumb'>
                <div className="container">
                    <ul className="breadcrumb__list">
                        <li className="breadcrumb__item">
                            <a href="#" className='breadcrumb__link'>Home</a>
                            <span>/</span>
                        </li>
                        <li className="breadcrumb__item">
                            <a href="#" className='breadcrumb__link'>All Categories</a>
                            <span>/</span>
                        </li>
                        <li className="breadcrumb__item">
                            <a href="#" className='breadcrumb__link'>Accessories</a>
                            <span>/</span>
                        </li>
                        <li className="breadcrumb__item">
                            <a href="#" className='breadcrumb__link breadcrumb__link--active'>Headphones (227,490 Results)</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Breadcrumb
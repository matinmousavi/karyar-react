import React, { useState } from 'react'
import "./ProductPage.css"
import camera from '../../assets/images/camera.jpg'
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import RangeSlider from 'react-range-slider-input';
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import ProductCart from '../Home/components/ProductCart/ProductCart';
import SelectInput from '../../components/kit/SelectInput/SelectInput';
import useFetch from '../../hooks/useFetch';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../components/app/Loader/Loader';

const ProductPage = () => {

  const [value, setValue] = useState(50);
  const { data } = useFetch("/products")
  const navigate = useNavigate()
  const { id: productId } = useParams()
  const { data: product, loading } = useFetch(`/products/${productId}`)

  return (
    <>
      {
        !loading ? (
          <div className='ProductPage'>
            <div className='container'>
              <div className='ProductPage_top'>
                <div className='ProductPage_top_iamges'>
                  <div className='btn_slider_top'>
                    <FaArrowUp className='btn_slider_top_icon' />
                  </div>

                  <div className='ProductPage_top_div_iamge'>
                    <img src={camera} alt="" className='ProductPage_top_iamge' />
                  </div>
                  <div className='ProductPage_top_div_iamge'>
                    <img src={camera} alt="" className='ProductPage_top_iamge' />

                  </div> <div className='ProductPage_top_div_iamge'>
                    <img src={camera} alt="" className='ProductPage_top_iamge' />
                  </div>

                  <div className='btn_slider_bottom'>
                    <FaArrowDown className='btn_slider_bottom_icon' />
                  </div>

                </div>
                <div className='ProductPage_top_div_imagemain'>
                  <img src={camera} alt="" className='ProductPage_top_imagemain' />
                </div>


                <div className='ProductPage_top_info'>
                  <p className='ProductPage_top_info_title'>{product?.name
                  }</p>
                  <div className='ProductPage_top_info_stars_sub'>
                    <div className='ProductPage_top_info_stars'>
                      <FaStar className='ProductPage_top_info_star' />
                      <FaStar className='ProductPage_top_info_star' />
                      <FaStar className='ProductPage_top_info_star' />
                      <FaStar className='ProductPage_top_info_star' />
                      <FaStar className='ProductPage_top_info_star' />
                    </div>
                    <span className='ProductPage_top_info_stars_sub_span'>10 Review(s) | Add your review</span>
                  </div>

                  <div className='ProductPage_top_info_price'>
                    <span className='ProductPage_top_info_price_main'>${product?.price?.toFixed(2)}</span>
                    {/* <del className='ProductPage_top_info_price_delet'>$990.00</del> */}
                    <span className='ProductPage_top_info_price_spna'>IN STOCK</span>
                  </div>
                  <p className='ProductPage_top_info_desc'>
                    {product?.description}
                  </p>
                  <div className='ProductPage_top_info_option'>
                    <SelectInput
                      width="40%"
                      label="size:"
                      options={["SM", "L", "XL", "2XL"]}
                      optionValues={["sm", "l", "xl", "2xl"]}
                      selectId="show"
                    />
                    <SelectInput
                      width="40%"
                      label="color:"
                      options={["Red", "Blue", "Yellow"]}
                      optionValues={["red", "blue", "yellow"]}
                      selectId="show"
                    />
                  </div>

                  <div className='ProductPage_top_info_QTY'>
                    <div className='ProductPage_top_info_QTY_left'>
                      <span>QTY</span>
                      <div className='div_parent_minus_plus'>
                        <div className='parent_plua'> <span className='plua'>+</span> </div>
                        <div className='parent_minus'>  <span className='minus'> -</span> </div>
                      </div>
                    </div>
                    <button className='ProductPage_top_info_QTY_add'>ADD TO CART</button>
                  </div>

                  <div className='ProductPage_top_info_Add'>
                    <div className='ProductPage_top_info_Add_left'>
                      <CiHeart className='ProductPage_top_info_Add_icon' />
                      <span className='ProductPage_top_info_Add_span'>ADD TO WISHLIST</span>
                    </div>
                    <div className='ProductPage_top_info_Add_right'>
                      <FaArrowRightArrowLeft className='ProductPage_top_info_Add_right_icon' />
                      <span className='ProductPage_top_info_Add_right_icon'>ADD TO COMPARE</span>
                    </div>
                  </div>
                  <div className='ProductPage_top_info_Category'>
                    <span>CATEGORY:</span>
                    <span>{product?.category?.name}</span>
                  </div>
                  <div className='ProductPage_top_info_share'>
                    <span className='ProductPage_top_info_share_span'>SHARE:</span>
                    <FaFacebookF className='ProductPage_top_info_share_face' />
                    <FaTwitter className='ProductPage_top_info_share_twit' />
                    <FaGooglePlusG className='ProductPage_top_info_share_g' />
                    <MdEmail className='ProductPage_top_info_share_e' />

                  </div>
                </div>
              </div>




              <div className='ProductPage_content'>
                <div className='ProductPage_content_header'>
                  <span className='ProductPage_content_header_desc'>Description</span>
                  <span className='ProductPage_content_header_delt'>Details</span>
                  <span className='ProductPage_content_header_rev'>Review(3)</span>
                </div>

                <div className='ProductPage_content_main'>

                  <div className='ProductPage_content_score'>

                    <div className='ProductPage_content_score_first'>
                      <span className='ProductPage_content_score_first_numb'>4.5</span>
                      <FaStar className='ProductPage_content_score_first_icon'></FaStar>
                      <FaStar className='ProductPage_content_score_first_icon'></FaStar>
                      <FaStar className='ProductPage_content_score_first_icon'></FaStar>
                      <FaStar className='ProductPage_content_score_first_icon'></FaStar>
                      <FaStar className='ProductPage_content_score_first_icon'></FaStar>
                    </div>

                    <div className='ProductPage_content_score_item'>
                      <FaStar className='ProductPage_content_score_item_icon'></FaStar>
                      <FaStar className='ProductPage_content_score_item_icon'></FaStar>
                      <FaStar className='ProductPage_content_score_item_icon'></FaStar>
                      <FaStar className='ProductPage_content_score_item_icon'></FaStar>
                      <FaStar className='ProductPage_content_score_item_icon'></FaStar>
                      <RangeSlider
                        min={0} // حداقل مقدار
                        max={100} // حداکثر مقدار
                        value={value} // مقدار تک عددی
                        onInput={(value) => setValue(value)} // به‌روزرسانی مقدار
                        range={false} // غیرفعال کردن حالت دوطرفه
                        thumbsDisabled={[true, false]} // غیرفعال کردن دسته اول (در صورت نیاز)
                      />

                      <span className='ProductPage_content_score_item_number'>3</span>
                    </div>


                  </div>

                  <div className='ProductPage_content_main_desc'>

                    <div className='ProductPage_content_main_desc_item'>
                      <div className='ProductPage_desc_item_left'>
                        <span className='ProductPage_desc_item_left_name'>John</span>
                        <span className='ProductPage_desc_item_left_date'>27 DEC 2018, 8.0PM</span>
                        <div className='parent_ProductPage_desc_item_left_icon'>
                          <FaStar className='ProductPage_desc_item_left_icon'></FaStar>
                          <FaStar className='ProductPage_desc_item_left_icon'></FaStar>
                          <FaStar className='ProductPage_desc_item_left_icon'></FaStar>
                          <FaStar className='ProductPage_desc_item_left_icon'></FaStar>
                          <FaStar className='ProductPage_desc_item_left_icon'></FaStar>
                        </div>
                      </div>
                      <div className='ProductPage_desc_item_right'>
                        <p className='ProductPage_desc_item_right_text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem illo sed perferendis ipsam magni fuga iure nobis ratione facilis cupiditate, hic pariatur eos enim corporis vel aperiam laboriosam neque voluptatum?</p>
                      </div>
                    </div>

                    <div className='ProductPage_content_main_desc_item'>
                      <div className='ProductPage_desc_item_left'>
                        <span className='ProductPage_desc_item_left_name'>John</span>
                        <span className='ProductPage_desc_item_left_date'>27 DEC 2018, 8.0PM</span>
                        <div className='parent_ProductPage_desc_item_left_icon'>
                          <FaStar className='ProductPage_desc_item_left_icon'></FaStar>
                          <FaStar className='ProductPage_desc_item_left_icon'></FaStar>
                          <FaStar className='ProductPage_desc_item_left_icon'></FaStar>
                          <FaStar className='ProductPage_desc_item_left_icon'></FaStar>
                          <FaStar className='ProductPage_desc_item_left_icon'></FaStar>
                        </div>
                      </div>
                      <div className='ProductPage_desc_item_right'>
                        <p className='ProductPage_desc_item_right_text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem illo sed perferendis ipsam magni fuga iure nobis ratione facilis cupiditate, hic pariatur eos enim corporis vel aperiam laboriosam neque voluptatum?</p>
                      </div>
                    </div>
                    <div className='ProductPage_content_main_desc_item'>
                      <div className='ProductPage_desc_item_left'>
                        <span className='ProductPage_desc_item_left_name'>John</span>
                        <span className='ProductPage_desc_item_left_date'>27 DEC 2018, 8.0PM</span>
                        <div className='parent_ProductPage_desc_item_left_icon'>
                          <FaStar className='ProductPage_desc_item_left_icon'></FaStar>
                          <FaStar className='ProductPage_desc_item_left_icon'></FaStar>
                          <FaStar className='ProductPage_desc_item_left_icon'></FaStar>
                          <FaStar className='ProductPage_desc_item_left_icon'></FaStar>
                          <FaStar className='ProductPage_desc_item_left_icon'></FaStar>
                        </div>
                      </div>
                      <div className='ProductPage_desc_item_right'>
                        <p className='ProductPage_desc_item_right_text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem illo sed perferendis ipsam magni fuga iure nobis ratione facilis cupiditate, hic pariatur eos enim corporis vel aperiam laboriosam neque voluptatum?</p>
                      </div>
                    </div>


                  </div>

                  <div className='ProductPage_content_main_comment'>
                    <input type="text" placeholder='Your Nmae' className='ProductPage_content_main_coment_name' />
                    <input type="text" placeholder='Your Email' className='ProductPage_content_main_coment_email' />
                    <textarea name="" placeholder='Your Review' id="" cols="30" rows="5" className='ProductPage_content_main_coment_comment'></textarea>
                    <div className='ProductPage_content_main_coment_star'>
                      <span className='ProductPage_coment_star_text'>Your Rating:</span>
                      <FaStar className='ProductPage_coment_star_icon'></FaStar>
                      <FaStar className='ProductPage_coment_star_icon'></FaStar>
                      <FaStar className='ProductPage_coment_star_icon'></FaStar>
                      <FaStar className='ProductPage_coment_star_icon'></FaStar>
                      <FaStar className='ProductPage_coment_star_icon'></FaStar>
                    </div>
                    <button className='ProductPage_content_main_coment_btn'>SUBMIT</button>
                  </div>

                </div>

                <div className='ProductPage_content_footer'>
                  <span className='ProductPage_content_footer_page active'>1</span>
                  <span className='ProductPage_content_footer_page'>2</span>
                  <span className='ProductPage_content_footer_page'>3</span>
                  <span className='ProductPage_content_footer_page'>4</span>
                  <span className='ProductPage_content_footer_page'>5</span>
                </div>
              </div>


              <div className='ProductPage_related'>

                <p className='ProductPage_related_header'>RELATED PRODUCT</p>

                <div className='parent_ProductPage_related_item'>
                  {
                    data?.products?.slice(0, 4).map(product =>
                      <ProductCart
                        key={product?._id}
                        img={product?.images[0]}
                        productCategory={product?.category.name}
                        price={product?.price.toFixed(2)}
                        productName={product?.name}
                        onClick={() => navigate(`/product/${product?._id}`)}
                      />
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        )
          :
          <Loader />
      }
    </>
  )
}

export default ProductPage
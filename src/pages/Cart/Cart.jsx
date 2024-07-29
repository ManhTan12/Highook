import React, { useState } from 'react';
import './Cart.scss';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { ArrowLeftOutlined, CloseCircleOutlined, RightOutlined, TagFilled } from '@ant-design/icons';
import {cart} from '../../data';

const Cart = () => {
    const [conut, setCount] = useState(0);
    const handleCount = (type) => {
        if (type === "dec") {
            conut > 1 && setCount(conut - 1);
        } else {
            setCount(conut + 1);
        }
    }
  return (
    <>
        <Navbar />
        <div className='cart'>
            <div className="cart-header">
                <p>SHOPPING CART </p><RightOutlined /> <p>CHECK DETAILS</p><RightOutlined /><p>ORDER COMPLETE </p>
            </div>
            <div className="cart-wapper">
                <div className="cart-product">
                    <div className="cart-product-title">
                        <div className="title">PRODUCT</div>
                        <div className="price">PRICE</div>
                        <div className="quantity">QUANTITY</div>
                        <div className="subtotal">SUBTOTAL</div>
                    </div>
                    <div className="cart-product-info">
                        {
                            cart.map((c) =>(
                                <div className="product-info">
                                    <div className="icon">
                                        <CloseCircleOutlined />
                                    </div>
                                    <img src={c.img} alt="" className="img" />
                                    <div className="name-c">
                                        <p>{c.title} - {c.color}</p>
                                        <p>Size: {c.size}</p>
                                    </div>
                                    <div className="price">
                                        {c.price} $
                                    </div>
                                    <div className="quantity">
                                        <div className="count">
                                            <div className="down" onClick={() => handleCount("dec")}>-</div>
                                            <div className="number">{conut}</div>
                                            <div className="up" onClick={() => handleCount("inc")}>+</div>
                                        </div>
                                    </div>
                                    <div className="subtotal">
                                        {c.subtotal}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="actions-clear">
                        <ArrowLeftOutlined />
                        <span>CONTINUE SHOPPING</span>
                    </div>
                </div>
                <div className="cart-total">
                    <div className="title">CART TOTAL</div>
                    <div className="top">
                        <div className="subtotal">
                            <p>Subtotal</p>
                            <div className="money">144 $</div>
                        </div>
                        <div className="shipping">
                            <p>Shipping</p>
                            <div className="address">
                                <p>Enter your address to view shipping options</p>
                                <div className="tab">Calculate shipping</div>
                            </div>
                        </div>
                        <div className="total">
                            <p>Total</p>
                            <div className="money">144 $</div>
                        </div>
                    </div>
                    <div className="center">
                        <div className="checkout">
                            PROCEED TO CHECKOUT
                        </div>
                        <div className="paypal">
                            <img src="https://euro-unit.com/images/paypalex.png" alt="" />
                        </div>
                    </div>
                    <div className="coupon">
                        <div className="title">
                        <TagFilled /> Coupon
                        </div>
                        <div className="coupon-infor">
                            <input type="text" placeholder='Coupon code'/>
                            <div className="apply">Apply coupon</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Cart
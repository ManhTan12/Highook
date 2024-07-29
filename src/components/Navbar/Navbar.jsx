import React, { useState } from 'react';
import "./Navbar.scss";
import { HeartOutlined, UserOutlined, SearchOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { cat,cart } from '../../data';
import { Drawer } from 'antd';
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <div className='navbar'>
            <div className="top">
                <Link to={`/cart`} className="logo">
                    <img src="https://highook.com/wp-content/uploads/2024/03/LOGO-HIGHOOK.png" alt="" className='logo-img' />
                </Link>
                <div className="cat">
                    {
                        cat.map((c) => (
                            <Link className='p' to={`/products/${c.cat}`}>{c.cat}</Link>
                        ))
                    }

                </div>
                <div className="icon">
                    <Link className="icon-count" to={`/wishlist`}>
                        <HeartOutlined className='icon' />
                        <span className='count'>3</span>
                    </Link>
                    <div className="icon-count" onClick={showDrawer}>
                        <img src="https://highook.com/wp-content/uploads/2024/04/Bag-2.png" alt="" />
                        <span className='count'>2</span>
                    </div>
                    <Drawer title="CART" onClose={onClose} open={open} className='drawer'>
                        <div className="cart-body">
                            {cart.map((ca) =>(
                                <div className="draw-cart">
                                    <img src={ca.img} alt="" />
                                    <div className="cart-product">
                                        <div className="info">
                                            <p className='title-color'>{ca.title}-{ca.color}</p>
                                            <p className='size'>Size: {ca.size}</p>
                                            <p className='p'>{ca.qantity} x <p className='dola'>{ca.price} $</p></p>
                                        </div>
                                    </div>
                                    <div className="icon-1">
                                        <CloseCircleOutlined />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="cart-footer">
                            
                                <div className="subtotal-dala">
                                    <div className="subtotal">
                                        Subtotal:
                                    </div>
                                    <div className="subtotal">
                                        144 $
                                    </div>
                                </div>
                            
                            <div className="cart-bottom">
                                <div className="view">
                                    VIEW CART
                                </div>
                                <div className="view">
                                    CHECK OUT
                                </div>
                            </div>
                        </div>
                    </Drawer>

                    <div className="icon-count">
                        <UserOutlined className='icon' />
                    </div>
                </div>
            </div>

            <div className="bottom">
                <div className="right">

                </div>
                <div className="center">
                    <p>Free Shipping Over 60$</p>
                </div>
                <div className="left">
                    <input type="text" placeholder='Search a products' /><span><SearchOutlined /></span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
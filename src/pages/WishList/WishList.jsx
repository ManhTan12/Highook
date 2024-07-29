import React from 'react';
import './WishList.scss';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { CloseCircleOutlined, FacebookFilled, MailFilled, PinterestFilled, ShoppingCartOutlined, TwitterCircleFilled } from '@ant-design/icons';
const WishList = () => {
    return (
        <>
            <Navbar />
            <div className='wishlist'>
                <div className="wishlist-nav">
                    WISHLIST
                </div>
                <div className="wishlist-wapper">
                    <h1 className="wishlist-title">
                        My wishlist
                    </h1>
                    <div className="wishlist-container">
                        <div className="title">
                            <div className='clear'></div>
                            <div className='img'></div>
                            <div className='name'>PRODUCT NAME</div>
                            <div className='unit'>UNIT PRICE</div>
                            <div className='stock'>STOCK STATUS</div>
                            <div className='action'></div>
                        </div>
                        <div className="all">
                            <div className="wishlist-product">
                                <div className='clear'>
                                    <CloseCircleOutlined className='icon' />
                                </div>
                                <img src='http://highook.com/wp-content/uploads/2024/03/ORIGINAL-STYLE-300x400.png' alt='' className='img'></img>
                                <div className='name'>T-shirt Hand</div>
                                <div className='unit'>60 $</div>
                                <div className='stock'>In Stock</div>
                                <div className='action'>
                                    <div className="bao">
                                        <ShoppingCartOutlined />
                                        <p>SELECT OPTIONS</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wishlist-product">
                                <div className='clear'>
                                    <CloseCircleOutlined className='icon' />
                                </div>
                                <img src='http://highook.com/wp-content/uploads/2024/03/ORIGINAL-STYLE-300x400.png' alt='' className='img'></img>
                                <div className='name'>T-shirt Hand</div>
                                <div className='unit'>60 $</div>
                                <div className='stock'>In Stock</div>
                                <div className='action'>
                                    <div className="bao">
                                        <ShoppingCartOutlined />
                                        <p>SELECT OPTIONS</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wishlist-product">
                                <div className='clear'>
                                    <CloseCircleOutlined className='icon' />
                                </div>
                                <img src='http://highook.com/wp-content/uploads/2024/03/ORIGINAL-STYLE-300x400.png' alt='' className='img'></img>
                                <div className='name'>T-shirt Hand</div>
                                <div className='unit'>60 $</div>
                                <div className='stock'>In Stock</div>
                                <div className='action'>
                                    <div className="bao">
                                        <ShoppingCartOutlined />
                                        <p>SELECT OPTIONS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wishlist-footer">
                        <div className="share">
                            Share on:
                        </div>
                        <div className="icon">
                            <FacebookFilled />
                            <TwitterCircleFilled />
                            <PinterestFilled />
                            <MailFilled />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default WishList
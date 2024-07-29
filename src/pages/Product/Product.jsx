import React, { useState } from 'react';
import "./Product.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { DownOutlined, HeartOutlined} from '@ant-design/icons';
import { color, size } from '../../data'
import Related from '../../components/Related/Related';


const Product = () => {
    const [conut, setCount] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () =>{
        setIsOpen(!isOpen)
    }
    const handleCount = (type) => {
        if (type === "dec") {
            conut > 1 && setCount(conut - 1);
        } else {
            setCount(conut + 1);
        }
    }
    const image = [
        "https://highook.com/wp-content/uploads/2024/03/Amazing-Squid.png",
        "https://highook.com/wp-content/uploads/2024/03/ORIGINAL-STYLE-300x400.png",
        "https://highook.com/wp-content/uploads/2024/03/My-game-300x400.png",
        "https://highook.com/wp-content/uploads/2024/03/ORIGINAL-STYLE-300x400.png"
    ]
    return (
        <div>
            <Navbar />
            <div className="product-page">
                <div className="product-n">
                    <div className="product-navbar">
                        <p></p>
                        <p>WOMAN</p>
                        <div class="nav-buttons">
                            <button class="nav-button">&lt;</button>
                            <button class="nav-button">&gt;</button>
                        </div>
                    </div>
                </div>
                <div className="product-wapper">
                    <div className="product-top">
                        <div className="img-small">
                            <img src={image[0]} alt="" />
                            <img src={image[1]} alt="" />
                            <img src={image[2]} alt="" />
                            <img src={image[3]} alt="" />
                        </div>
                        <div className="img-big">
                            <div className="item">
                                <img src={image[0]} alt="" />
                                {/* <div className='out-of-stock'>OUT OF STOCK</div> */}
                                <p className='isNew'>New</p>
                                <div className="tym">
                                    <HeartOutlined className='icon' />
                                </div>
                            </div>
                        </div>
                        <div className="img-infor">
                            <h1>T-shirt Hand Basic</h1>
                            <p>50 $</p>
                            <div className="dec">Vừa vặn thoáng mát, Hoạt động thể dục thể thao quá tuyệt vời</div>
                            <div className="product-form">
                                <div className="form-color">
                                    <div className="title">Color</div>
                                    <div className="form-top">
                                        {color.map((c) => (
                                            <div className='value' type="text" style={{ backgroundColor: c.hexCode }} />
                                        ))}
                                    </div>
                                </div>
                                <div className="form-size">
                                    <div className="title">Size</div>
                                    <div className="form-bottom">
                                        {size.map((s) => (
                                            <div className="value">{s.name}</div>
                                        ))}
                                    </div>
                                </div>
                                <div className="count-cart">
                                    <div className="count">
                                        <div className="down" onClick={() => handleCount("dec")}>-</div>
                                        <div className="number">{conut}</div>
                                        <div className="up" onClick={() => handleCount("inc")}>+</div>
                                    </div>
                                    <div className="cart">ADD TO CART</div>
                                </div>
                                <div className="paypay">
                                    <img src="https://euro-unit.com/images/paypalex.png" alt="" />
                                    {/* <span className='pay'>Pay</span><span className='pal'>Pal</span> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-center">

                    </div>
                </div>
                <div className="addtional">
                    <div className={`addtional-title ${isOpen ? 'convert' : ''}`} onClick={handleOpen}>
                        <DownOutlined className={`icon ${isOpen ? 'rotated' : ''}`} />
                        <p >Additional information</p>
                    </div>
                    {
                        isOpen && (
                            <div className="addtional-color-size">
                                <div className="color">
                                    <div className="title">COLOR</div>
                                    <div className="name">
                                        {color.map((c,index) => (
                                            <div className='value' type="text" key={c.id}>{c.name} {index === color.length - 1 ? '.' : ', '}</div>
                                        ))}
                                    </div>
                                </div>
                                <div className="color">
                                <div className="title">SIZE</div>

                                    <div className="name">
                                        {size.map((s,index) => (
                                            <div className='value' type="text" key={s.id}>{s.name} {index === size.length - 1 ? '.' : ', '}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <Related />
            </div>
            <Footer />
        </div>
    )
}

export default Product
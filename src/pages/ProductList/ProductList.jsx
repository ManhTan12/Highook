import React, { useState } from 'react';
import './ProductList.scss';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { popularProducts, color, size } from '../../data';
import Product from '../../components/Product/Product';
import { Range, getTrackBackground } from 'react-range';
import { useLocation } from 'react-router-dom';
import axios from 'axios';


const ProductList = () => {
    const [values, setValues] = useState([0, 60]);
    const [selectedColor, setSelectedColor] = useState(null);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log('selectedColor', selectedColor);
    const MIN = 0;
    const MAX = 60;
    const location = useLocation();
    // console.log(location.pathname.split("/")[2]);
    const cat = location.pathname.split("/")[2];
    const fetchProducts = async () => {
        try {
            const response = await axios.get(cat ?
                `https://highook.com/wp-json/wc/v3/products/${cat}` :  "",
                {
                    auth: {
                        username: 'ck_89ea605a67ab71af2392337ad2cbc8275bb40e7d',
                        password: 'cs_f0ce9b8c15c3b3f968815b39e8f56ed33de4a225'
                    }
                }
            );
            setProducts(response.data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }

    };


    return (
        <div className='product-list'>
            <Navbar />
            <div className="wapper">
                <div className="header">WOMAN</div>
                <div className="main">
                    <div className="sidebar">
                        <div className="filter-price">
                            <p>FILTER BY PRICE</p>
                            <div className="small"></div>
                            <Range
                                values={values}
                                step={10}
                                min={MIN}
                                max={MAX}
                                onChange={(values) => setValues(values)}
                                renderTrack={({ props, children }) => (
                                    <div
                                        onMouseDown={props.onMouseDown}
                                        onTouchStart={props.onTouchStart}
                                        style={{
                                            ...props.style,
                                            height: '36px',
                                            display: 'flex',
                                            width: '100%'
                                        }}
                                    >
                                        <div
                                            ref={props.ref}
                                            style={{
                                                height: '5px',
                                                width: '100%',
                                                borderRadius: '4px',
                                                background: getTrackBackground({
                                                    values,
                                                    colors: ['#ccc', '#C0AC88', '#ccc'],
                                                    min: MIN,
                                                    max: MAX
                                                }),
                                                alignSelf: 'center'
                                            }}
                                        >
                                            {children}
                                        </div>
                                    </div>
                                )}
                                renderThumb={({ index, props, isDragged }) => (
                                    <div
                                        {...props}
                                        style={{
                                            ...props.style,
                                            height: '16px',
                                            width: '16px',
                                            borderRadius: '50%',
                                            backgroundColor: '#C0AC88',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            boxShadow: '0px 2px 6px #AAA'
                                        }}
                                    >
                                        <div
                                            style={{
                                                height: '16px',
                                                width: '5px',
                                                backgroundColor: isDragged ? '#C0AC88' : '#C0AC88'
                                            }}
                                        />
                                    </div>
                                )}
                            />
                            <div className="price-slider">

                            </div>
                            <div className="bottom">
                                <button>FILTER</button>

                                <div className="price">
                                    <p>Price:   </p>

                                    <div className="number">{values[0]} $ — {values[1]} $</div>
                                </div>
                            </div>
                        </div>
                        <div className="filer">
                            <div className="filter-color">
                                <p>Color</p>
                                <div className="color">
                                    <div className="color-map">
                                        {color.map((c) => (
                                            <>
                                                <div className='color-item' onClick={() => setSelectedColor(c.name)}>
                                                    <div className="color-cirle" style={{ backgroundColor: c.hexCode, borderColor: c.hexCode }}>
                                                        {selectedColor === c.name && <span className="checkmark">✔</span>}
                                                    </div>
                                                    <div className="color-name">{c.name}</div>
                                                </div>
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="filter-size">
                                <div className="title">Size</div>
                                <div className="size">
                                    <div className="size-map">
                                        {
                                            size.map((s) => (
                                                <div className="size-item">
                                                    <input type='checkbox' className="size-input"></input>
                                                    <div className="size-name">{s.name}</div>
                                                </div>

                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="products">
                        {
                            products.map((item) => (
                                <Product cat={cat} item={item} key={item.id} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductList
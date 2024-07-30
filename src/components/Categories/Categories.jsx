import React, { useEffect, useState } from 'react';
import './Categories.scss';
import { popularProducts } from "../../data";
import CategoryItem from "../CategoryItem/CategoryItem";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
const Categories = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          'https://highook.com/wp-json/wc/v3/products',
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

    fetchProducts();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products: {error}</p>;

  return (
    <div className='categories'>
      <span className='sale'>SALE</span>&nbsp; &nbsp;<span className='view'>View all</span>
      {/* <div className="arrow-left" >
        <LeftOutlined />
      </div> */}
      <div className="products">
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
        >
          {
            products.map((item) => (
              <SwiperSlide>
                <CategoryItem item={item} key={item.id} />
              </SwiperSlide>

            ))
          }
        </Swiper>
      </div>
      {/* <div className="arrow-right">
        <RightOutlined />
      </div> */}
    </div>
  )
}

export default Categories
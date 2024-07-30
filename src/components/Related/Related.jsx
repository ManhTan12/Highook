import React, { useEffect, useState } from 'react';
import './Related.scss'
import { popularProducts } from '../../data'
import CategoryItem from '../CategoryItem/CategoryItem'
import axios from 'axios';
import { SwiperSlide } from 'swiper/react';
import Swiper from 'swiper';

const Related = () => {

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
    <div className='related'>
        <span className='sale'>RELATED PRODUCTS</span>
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
    </div>
  )
}

export default Related
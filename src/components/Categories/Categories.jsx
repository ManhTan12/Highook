import React from 'react';
import './Categories.scss';
import { popularProducts } from "../../data";
import CategoryItem from "../CategoryItem/CategoryItem";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const Categories = () => {
  return (
    <div className='categories'>
      <span className='sale'>SALE</span>&nbsp; &nbsp;<span className='view'>View all</span>
      <div className="arrow-left" >
        <LeftOutlined />
      </div>
      <div className="products">
        {
          popularProducts.map((item) => (
            <CategoryItem item={item} key={item.id} />
          ))
        }
      </div>
      <div className="arrow-right">
        <RightOutlined />
      </div>
    </div>
  )
}

export default Categories
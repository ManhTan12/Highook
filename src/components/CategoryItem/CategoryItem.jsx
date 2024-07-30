import React from 'react';
import "./CategoryItem.scss";
import { HeartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const CategoryItem = ({ item }) => {
  // console.log('item', item.images[0].src);
  //console.log('item', item.images?.[0].src);
  console.log('item', item);
  

  return (
    <div className='categoryItem'>
      {
        item.images && (
          <div className="item">
            {/* <Link to={`/product/${item.id}`}><img src={item.permalink} alt=""/></Link> */}
            {item?.images?.[0]?.src && <img src={item?.images?.[0]?.src} alt="" />} 
            {item.stock_status === "No" && <div className='out-of-stock'>OUT OF STOCK</div>}
            {item.isNew && <p className='isNew'>{item.isNew}</p>}
            <div className="tym">
              <HeartOutlined className='icon' />
            </div>
            <div className="info">
              <div className="title">{item.name}</div>
              <div className="dec">{item.slug}</div>
              <div className="dec">{item.color}</div>
            </div>
          </div>

        )
      }
    </div>
  )
}

export default CategoryItem
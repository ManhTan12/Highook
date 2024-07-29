import React from 'react';
import './Product.scss'
import { HeartOutlined} from '@ant-design/icons';

const Product = ({item}) => {
  return (
    <div className='product'>
        <div className="item">
          <img src={item.img} alt=""/>
          {item.isStock === "No" && <div className='out-of-stock'>OUT OF STOCK</div>}
          {item.isNew && <p className='isNew'>{item.isNew}</p>}
          <div className="tym">
          <HeartOutlined className='icon'/>
          </div>
          <div className="info">
            <div className="title">{item.title}</div>
            <div className="price">{item.price}</div>
            <div className="dec">{item.dec}</div>
            <div className="dec">{item.color}</div>
          </div>
        </div>
    </div>
  )
}

export default Product
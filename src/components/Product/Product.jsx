import React from 'react';
import './Product.scss'
import { HeartOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Product = ({item}) => {

  

  return (
    <div className='product'>
        <div className="item">
          <Link to={`/product/${item.id}`}><img src={item.img} alt=""/></Link>
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
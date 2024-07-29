import React from 'react';
import './Related.scss'
import { popularProducts } from '../../data'
import CategoryItem from '../CategoryItem/CategoryItem'

const Related = () => {
  return (
    <div className='related'>
        <span className='sale'>RELATED PRODUCTS</span>
      <div className="products">
        {
          popularProducts.map((item) =>(
            <CategoryItem item={item} key={item.id}/>
          ))
        }
      </div>
    </div>
  )
}

export default Related
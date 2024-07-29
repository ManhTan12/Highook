import React from 'react'
import './CollectionItem.scss'
const CollectionItem = ({item}) => {
  return (
    <div className='collectionItem'>
        <div className="item">
            <img src={item.img} alt="" />
            <div className="title">{item.title}</div>
        </div>
    </div>
  )
}

export default CollectionItem
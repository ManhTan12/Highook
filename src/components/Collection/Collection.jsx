import React from 'react'
import './Collection.scss';
import {cat} from "../../data"
import CollectionItem from '../CollectionItem/CollectionItem';
const Collection = () => {
  return (
    <div className='collection'>
        <span className='sale'>COLLECTION</span>&nbsp; &nbsp;<span className='view'>View all</span>
        <div className="cat">
            {cat.map((item) =>(
                <CollectionItem item={item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default Collection
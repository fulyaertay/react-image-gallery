//react function component
import React,{useState} from 'react'
import Images from './images'
import './Gallery.css';

function Gallery() {
  return (
    <div className='gallery'>
        {Images.map((item,index)=>{
            return(
                <div className='pics' key='index'>
                    <img src={item.image} style={{width:"100%"}}></img>
                </div>
            )
        })}
    </div>
  )
}

export default Gallery
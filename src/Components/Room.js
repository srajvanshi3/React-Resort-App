import React from 'react'
import {Link } from 'react-router-dom'

function Room({room}) {
    const {name , slug  ,images , price}= room;
    console.log(images)
    return (
        <article className='room'>

        <div className='img-container'>
            <img src={images[0]} alt='single-image'/>
            <div className='price-top'>
    <h6>Rs{price}</h6>
    <p>per night</p>
            </div>
            <Link to={`/rooms/${slug}`}
            className='btn-primary room-link' >Features</Link>
        </div>
    <p className="room-info">{name}</p>

        </article>
    )
}




export default Room

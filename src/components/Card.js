import React from 'react';
import { useState } from 'react';
import ContentLoader from 'react-content-loader';

import { MdFavorite } from 'react-icons/md'
import { MdFavoriteBorder } from 'react-icons/md'
import { BsPlus } from 'react-icons/bs'
import { AiFillCheckSquare } from 'react-icons/ai'

function Card({ name, image, price, onPlus, onFavorite }) {
    const [isAdded, setIsAdded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const onClickPlus = () => {
        onPlus({ name, image, price })
        setIsAdded(!isAdded)
    };

    const onClickFavorite = () => {
        onFavorite({ name, image, price })
        setIsFavorite(!isFavorite);
    }; 
    

    return (
    <div className="card">
        <div className="card-favorite" onClick={onClickFavorite}>
            {isFavorite ?  <MdFavorite  className='card-favorite__added'/> : <MdFavoriteBorder/> }
        </div>
        <img src={image} alt="Articles" width={133} height={112} className='card-articles'/>
        <h5>{name}</h5>
        <div className='card-info'>
            <div className='card-price'>
                <span>Price</span>
                <b>{price}$</b>
            </div>
                {!isAdded ? <BsPlus onClick={() => onClickPlus()} className="card-plus"/> : <AiFillCheckSquare onClick={() => onClickPlus()} className='card-checked'/>}
        </div>
    </div>
    );
}

export default Card;
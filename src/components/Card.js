import React from 'react';
import { useState } from 'react';

function Card({ name, image, price, onFavorite, onPlus}) {
    const [isAdded, setIsAdded] = useState(false);
    const [isFavorite, setIsFavorite] = useState();

    const onClickPlus = () => {
        onPlus({ name, image, price })
        setIsAdded(!isAdded)
    };

    const onClickFavorite = () => {
        setIsFavorite(!isFavorite);
        onFavorite({ name, image, price });  
    };

    return (
        <div className="card">
        <div className="card-favorite" onClick={onClickFavorite}>
        <img src={isFavorite ? 'img/liked.svg' : "/img/unliked.svg"} alt="unliked" />
        </div>
        <img src={image} alt="Articles" width={133} height={112} className='card-articles'/>
        <h5>{name}</h5>
        <div className='card-info'>
            <div className='card-price'>
                <span>Price</span>
                <b>{price}$</b>
            </div>
                <img onClick={() => onClickPlus()} className="card-btn" src={isAdded ? '/img/btn-checked.svg' : '/img/plus.svg'} alt="plus"/>
        </div>
    </div>
    );
}

export default Card;
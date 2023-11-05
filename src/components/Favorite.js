import React, { useContext } from 'react';
import Card from './Card';

import {AppContext} from '../App'


function Favorite() {

    const { favorites, onAddToFavorite } = useContext(AppContext);

    return (
        <div>
            <h1>mY zokladki</h1>
            <div className='content-wrapper'>
             { favorites.length !== 0 ?
                favorites.map((val, index) => (
                <Card
                    key={index}
                    name={val.title}
                    price={val.price}
                    image={val.imageUrl}
                    onFavorite={onAddToFavorite}
                    // onAddToFavorite={onAddToFavorite}
                />
            ))
            : 
            <h2>Favorite is empty</h2>
             }
            </div>
        </div>
    );
}

export default Favorite;

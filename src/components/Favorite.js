import React from 'react';
import Card from './Card';

function Favorite({ favoriten = []}) {
    return (
        <div>
            <h1>mY zokladki</h1>
            <div className='content-wrapper'>
             { favoriten.length !== 0 ?
                favoriten.map((val, index) => (
                <Card
                    key={index}
                    name={val.title}
                    price={val.price}
                    image={val.imageUrl}
                    // onPlus={(obj) => onAddToCart(obj)}
                    // onFavorite={(obj) => onAddToFavorite(obj)}
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

import { useState, useEffect } from "react";
import axios from "axios";

import Card from "../components/Card";


function Home({ onCartItemsChange, searchValue }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('https://64fb67f3cb9c00518f7afc7b.mockapi.io/api/1/articles').then((res) => {
            setItems(res.data)
        })

        axios.get('https://64fb67f3cb9c00518f7afc7b.mockapi.io/api/1/Cart').then((res) => {
            const cartItemsFromApi = res.data;
            onCartItemsChange(cartItemsFromApi);
    });
    }, []);

    const onAddToCart = (obj) => {
        onCartItemsChange((prev) => [...prev, obj]); 
    
        axios.post('https://64fb67f3cb9c00518f7afc7b.mockapi.io/api/1/Cart', obj);
    }

    return (
        <div className="content-wrapper">
            {
                items.filter(val => val.title.toLowerCase().includes(searchValue.toLowerCase()))
                .map((val, index) => (
                    <Card 
                        key={index}
                        name={val.title} 
                        price={val.price} 
                        image={val.imageUrl}
                        onPlus={(obj) => onAddToCart(obj)}
                        onFavorite={() => console.log('favorite')}
                    />
                ))
            }
        </div>
    );
}

export default Home;
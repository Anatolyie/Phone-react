import { useState, useEffect } from "react";
import axios from "axios";

import Card from "../components/Card";
import Skeleton from "../components/Skeleton"


function Home({ onCartItemsChange, searchValue, onAddToFavorite }) {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index}/>)

    useEffect(() => {
        axios.get('https://64fb67f3cb9c00518f7afc7b.mockapi.io/api/1/articles').then((res) => {
            setItems(res.data)
            setIsLoading(false)
        })

        axios.get('https://64fb67f3cb9c00518f7afc7b.mockapi.io/api/1/Cart').then((res) => {
            const cartItemsFromApi = res.data;
            onCartItemsChange(cartItemsFromApi);
        });
       
    }, []);
   

    const onAddToCart = (obj) => {
        try {
            axios.post('https://64fb67f3cb9c00518f7afc7b.mockapi.io/api/1/Cart', obj);
            onCartItemsChange((prev) => [...prev, obj]);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="content-wrapper">
            { isLoading ? skeleton
            :
                items.filter(val => val.title.toLowerCase().includes(searchValue.toLowerCase()))
                .map((val, index) => (
                    <Card 
                        key={index}
                        name={val.title} 
                        price={val.price} 
                        image={val.imageUrl}
                        onPlus={(obj) => onAddToCart(obj)}
                        onFavorite={(obj) => onAddToFavorite(obj)}
                    />
                ))
            }
        </div>
    );
}

export default Home;
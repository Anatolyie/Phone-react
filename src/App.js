import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Home from './pages/Home';
import Error from './pages/Error';
import Favorites from './pages/Favorites';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Sidebar from './components/Sidebar';


import './index.scss'

function App() {
  const [cartOpened, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const handleCartItemsChange = (newCartItems) => {
    setCartItems(newCartItems);
  };

  const onRemoveItem = (id) => {
    // axios.delete(`https://64fb67f3cb9c00518f7afc7b.mockapi.io/api/1/Cart/${id}`)
    setCartItems((prev) => prev.filter((item) => item.id !== id))
    console.log(id)
  }

  return (
    <div className="wrapper">
    <Header onClickCart={() => setCartOpen(true)} cartItems={cartItems} />
    { cartOpened ? <Sidebar  items={cartItems} onClose={() => setCartOpen(false)} onRemove={onRemoveItem}/> : null}
    <SubHeader searchValue={searchValue} setSearchValue={setSearchValue}/>
    <Routes>
      <Route path='/' element={<Home onCartItemsChange={handleCartItemsChange} searchValue={searchValue} setCartItems={setCartItems} />}/>
      <Route path='/favorite' element={<Favorites/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
  </div>
  );
}

export default App;


// onAddToCart={handleFavoriteItemsChange}
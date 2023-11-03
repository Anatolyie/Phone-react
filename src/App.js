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

  return (
    <div className="wrapper">
    <Header onClickCart={() => setCartOpen(true)} cartItems={cartItems}/>
    { cartOpened ? <Sidebar  items={cartItems} onClose={() => setCartOpen(false)}/> : null}
    <SubHeader searchValue={searchValue} setSearchValue={setSearchValue}/>
    <Routes>
      <Route path='/' element={<Home onCartItemsChange={handleCartItemsChange} searchValue={searchValue}/>}/>
      <Route path='/favorite' element={<Favorites/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
  </div>
  );
}

export default App;
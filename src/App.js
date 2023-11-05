import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState, createContext, useContext  } from 'react';

import Home from './pages/Home';
import Error from './pages/Error';
import Favorites from './pages/Favorites';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Sidebar from './components/Sidebar';
import './index.scss';

export const AppContext = createContext({});

function App() {
  const [cartOpened, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const handleCartItemsChange = (newCartItems) => {
    setCartItems(newCartItems);
  };

  const onRemoveItem = (id) => {
    // axios.delete(`https://64fb67f3cb9c00518f7afc7b.mockapi.io/api/1/Cart/${id}`)
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }
  const onAddToFavorite = (id) => {
    console.log('Adaugă la favorite:', id);
  };

  return (
    <AppContext.Provider value={{ favorites, onAddToFavorite  }}>
      <div className="wrapper">
        <Header onClickCart={() => setCartOpen(true)} cartItems={cartItems} />
        { cartOpened ? <Sidebar  items={cartItems} onClose={() => setCartOpen(false)} onRemove={onRemoveItem}/> : null}
        <SubHeader searchValue={searchValue} setSearchValue={setSearchValue}/>
        <Routes>
          <Route path='/' element={<Home onAddToFavorite={onAddToFavorite} onCartItemsChange={handleCartItemsChange} searchValue={searchValue} setCartItems={setCartItems} />}/>
          <Route path='/favorite' element={<Favorites />}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;

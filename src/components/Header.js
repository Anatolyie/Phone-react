import React from 'react';
import { Link } from 'react-router-dom';


function Header({ onClickCart }) {

    return (
     <>
        <header className="header">
        <div className="header-left">
            <Link to="/"  className="header-logo">
                <img src="/img/logo.jpg" alt="logo" width={40} height={40}/>
            </Link>
            <div className="header-left__info">
                <h3 className='header-left__title'>React Articles</h3>
                <p className='header-left__subtitle'>The best Articles</p>
            </div>
        </div>
        <div>
            <ul className="header-right">
                <li onClick={onClickCart} className='header-right__list'>
                    <img src="/img/cart.svg" alt="logo" width={18} height={18} className='header-right__list-img'/>
                    <span>100$</span>
                </li>
                <li> 
                    <img src="/img/heart.svg" alt="logo" width={18} height={18} className='header-right__list-img'/>
                </li>
                <li> 
                    <img src="/img/user.svg" alt="logo" width={18} height={18} className='header-right__list-img'/>
                </li>
            </ul>
        </div>
   </header>
     </>
    );
}

export default Header;
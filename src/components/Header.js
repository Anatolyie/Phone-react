import React from 'react';
import { Link } from 'react-router-dom';

import { BsCart2 } from 'react-icons/bs'
import { BsHeart } from 'react-icons/bs'
import { LiaUserCircle } from 'react-icons/lia'


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
                    <BsCart2 className='header-right__list-img'/>
                    <span>100$</span>
                </li>
                <li> 
                    <Link to="/favorite">
                        <BsHeart className='header-right__list-img header-right__list-relative'/>
                    </Link>
                </li>
                <li> 
                    <LiaUserCircle className='header-right__list-img, header-right__list-user header-right__list-relative'/>
                </li>
            </ul>
        </div>
   </header>
     </>
    );
}

export default Header;
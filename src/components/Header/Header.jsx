import React from 'react';
import logo from '../../assets/logo.gif';
import './Header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <div className='container navbar'>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div className='menu'>
                        <ul>
                            <li><a href="/about-bcb">about bcb</a></li>
                            <li><a href="/news">news</a></li>
                            <li><a href="/match-center">match center</a></li>
                            <li><a href="/fixture">fixture</a></li>
                            <li><a href="/gallery">gallery</a></li>
                            <li><a href="/programas">programas</a></li>
                            <li><a href="/buy-ticket">buy ticket</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
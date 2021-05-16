import React from 'react';

import brand from '../assets/images/brand.png';
import search from '../assets/images/search.png';

const Header = () => {
    return (
        <header className="header">
            <img src={brand} alt="Meli logo" />
            <div className="center-container header__search-container">
                <input className="header__input" type="text" placeholder="Nunca dejes de buscar" />
                <div className="header__search">
                    <img src={search} alt="Buscador" />
                </div>
            </div>
        </header>
    )
}

export default Header
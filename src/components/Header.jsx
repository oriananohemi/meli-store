import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import brand from '../assets/images/brand.png';
import search from '../assets/images/search.png';

const Header = () => {
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        let input = e.target["query"];
        const url = `/items?seach=${input.value}`;
        input.value = ''
        history.push(url);
    }

    return (
        <header className="header">
            <Link to="/">
                <img src={brand} alt="Meli logo" />
            </Link>
                <form className="center-container header__search-container" onSubmit={handleSubmit}>
                    <input className="header__input" name="query" type="text" placeholder="Nunca dejes de buscar" />
                    <button className="header__search">
                        <img src={search} alt="Buscador" />
                    </button>
                </form>
        </header>
    )
}

export default Header
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import brand from '../assets/images/brand.png';
import search from '../assets/images/search.png';

const Header = () => {
    const history = useHistory()
    let input 

    const inputClear = () => {
        input.value = ''
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        input = e.target["query"];
        if(input.value !== '') {
            const url = `/items?seach=${input.value}`;
            history.push(url);
        }
    }

    return (
        <header className="header">
            <Link to="/">
                <img src={brand} alt="Meli logo" />
            </Link>
                <form className="center-container header__search-container" onSubmit={handleSubmit}>
                    <input className="header__input" name="query" type="text" placeholder="Nunca dejes de buscar" required/>
                    <button className="header__search">
                        <img src={search} alt="Buscador" />
                    </button>
                </form>
        </header>
    )
}

export default Header
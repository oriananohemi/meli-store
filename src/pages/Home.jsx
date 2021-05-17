import React from 'react';
import hero from '../assets/images/hero.jpg'

const Home = () => {
    return (
        <section className="hero">
            <h1 className="hero__title">Bienvenido a MeLi</h1>
            <p>Todo lo que necesitas en un solo lugar</p>
            <img className="hero__image" src={hero} alt="Bienvenida Meli" />
        </section>
    )
}

export default Home
import React from 'react';
import shipping from '../assets/images/shipping.png';

const Items = ({title, picture, price, free_shipping, address, condition}) => {
    return (
        <article className="center-container item">
            <img className="item__image" src={picture} alt={title} />
            <div>
                <p className="item__amount">{price.amount} <span>{price.currency}</span> {free_shipping?<img src={shipping} alt="Envio Gratis" /> : ''}</p>
                <h1 className="item__title">{title}</h1>
                {condition === 'new'? <p>Nuevo</p> : <p>Usado</p> }
            </div>
            <p>{address}</p>
        </article>
    )
}

export default Items
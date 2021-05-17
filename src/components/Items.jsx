import React from 'react';
import shipping from '../assets/images/shipping.png';
import { useHistory } from 'react-router-dom';

const Items = ({id, title, picture, price, free_shipping, address, condition}) => {
    const history = useHistory()
    const handleClick = (id) => {
        history.push(`/items${id}`)
    }
    
    return (
        <article className="item" onClick={() => handleClick(id)}>
            <div className="information-container">
                <img className="item__image" src={picture} alt={title} />
                <div>
                    <p className="item__amount">${price.amount} <span> {price.currency} </span> {free_shipping?<img title="Envio Gratis" src={shipping} alt="Envio Gratis" /> : ''}</p>
                    <h1 className="item__title">{title}</h1>
                    {condition === 'new'? <p>Nuevo</p> : <p>Usado</p> }
                </div>
            </div>
            <p>{address}</p>
        </article>
    )
}

export default Items
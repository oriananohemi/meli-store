import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';

import { getArticle } from '../services/requestHandler';

const Details = () => {
    const location = useLocation();
    const [article, setArticle] = useState(undefined)
    useEffect(() => {
        const searchValue = location.pathname.split('items')[1];
        console.log(searchValue)
        getArticle(searchValue)
        .then(article => setArticle(article.body.item))
    }, [location])

    return (
        <div>
        {
            article !== undefined ?
                (
                <div>
                    <span></span>
                    <article className="article">
                        <div className="article-container">
                            <img className="article__image" src={article.picture} alt={article.title} />
                            <div className="article__information">
                                <p className="article__information--small"><span>{article.condition}</span> - <span>{article.sold_quantity}</span></p>
                                <h1 className='article___information--standard'>{article.title}</h1>
                                <h2 className="article__information--big">$ {article.price.amount} <span>{article.price.currency}</span></h2>
                               <button className="button--big--blue">Comprar</button>
                            </div>
                        </div>
                        <div className="description">
                            <h2 className="description__title">Descripcion del producto</h2>
                            <p>{article.description}</p>
                        </div>
                    </article>
                </div>
                )
             :
            <h2></h2>
            }
        </div>
    )
}

export default Details
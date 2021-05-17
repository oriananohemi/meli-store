import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Items from '../components/Items';
import { getArticlesList } from '../services/requestHandler';

const Results = () => {
    const location = useLocation();
    const [articlesList, setArticlesList] = useState([])

    useEffect(() => {
        const searchValue = location.search.split('=')[1];
        getArticlesList(searchValue)
        .then(articles => 
            {
                console.log(articles.body.categories)
                setArticlesList(articles.body)
            })
    }, [location])

    return (
        <section>
            {
                articlesList.items?.length > 0  ? 
                    <div className="container">
                        <span className="breadcrumb">
                        {
                            articlesList.categories.slice(0,4).map((element) => (` ${element} . `)
                            )
                        }                        
                        </span>
                        {
                            articlesList.items.slice(0,4).map((item) => 
                            <Items key={item.id} {...item} />
                            )
                        }
                    </div>
                :
                <div className="not-found-container">
                    <h2> No se encontraron resultados, intenta de nuevo </h2>
                    <Link className="button--small--blue" to="/">Volver</Link>
                </div>
            }
        </section>
    )
}

export default Results
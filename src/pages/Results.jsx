import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Items from '../components/Items';
import { getArticlesList } from '../services/requestHandler';

const Results = () => {
    const keyword = window.location.search.split('=')[1]
    const [articlesList, setArticlesList] = useState([])

    useEffect(() => {
        console.log(keyword)
        getArticlesList(keyword)
        .then(articles => setArticlesList(articles.body.items))
    }, [keyword])

    return (
        <section>
            {
                articlesList?.length > 0  ? 
                    <div>
                        {
                            articlesList.map((item) => 
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
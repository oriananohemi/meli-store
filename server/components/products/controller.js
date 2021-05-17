const fetch = require('node-fetch');

const config = require('../../config');
const methods = {
    method: 'get'
}

const getArticleInformation = (id, description = '') => {
    return fetch(`${config.apiUrl}/items/${id}${description}`, methods)
        .catch(error => console.error('[Ocurrio un error en el fetch]', error))
        .then(response => response.json())
        .catch(error => console.error('[Ocurrio un error parseando los datos]', error))
}

const getArticleJson = (id) => {
    return Promise.all([getArticleInformation(id), getArticleInformation(id, '/description')])
        .catch(error => console.error('[Ocurrio un error obteniendo la informacion del articulo]', error))
        .then(([article, {plain_text}]) => {
            return dataJSON = {
                author: config.author,
                item: {
                    id: article.id,
                    title: article.title,
                    price: {
                        currency: article.currency_id,
                        amount: article.price,
                        decimals: ''
                    },
                    picture: article.thumbnail,
                    condition: article.condition,
                    free_shipping: article.shipping.free_shipping,
                    sold_quantity: article.sold_quantity,
                    description: plain_text,
                }
            }
    })
}

const getArticlesByQuery = (keyword) => {
    return fetch(`${config.apiUrl}/sites/MLA/search?q=${keyword}`, methods)
        .catch(error => console.error('[Ocurrio un error en el fetch]', error))
        .then(response => response.json())
        .then(data => {
            return {
                author: config.author,
                categories: data.available_filters
                    .find(({id}) => id === 'category').values
                    .map(({name}) => name),
                items: data.results.map((article) => ({
                    id: article.id,
                    title: article.title,
                    price: {
                        currency: article.currency_id,
                        amount: article.price,
                        decimals: 0
                    },
                    picture: article.thumbnail,
                    condition: article.condition,
                    free_shipping: article.shipping.free_shipping
                }))
            }
        })
}

module.exports = {
    getArticleJson,
    getArticlesByQuery
}
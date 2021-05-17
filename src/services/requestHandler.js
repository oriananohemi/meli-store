const url = 'http://localhost:3200/api/items';

const getArticlesList = (keyword) => {
  console.log(keyword)
  return fetch(`${url}?q=${keyword}`, { method: 'get' })
  .catch(error => console.error(error))
  .then(data => data.json())
}

const getArticle = async (id) => {
  return fetch(`${url}/${id}`, { method: 'get' })
  .catch(error => console.error(error))
  .then(data => data.json()) 
}
 
export {
  getArticlesList,
  getArticle
}   
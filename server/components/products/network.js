const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router()

router.get('/items', (req, res) => {
    controller.getArticlesByQuery(req.query.q)
    .then((list) => {
        response.success(req, res, list)
    })
    .catch((e) => {
        response.error(req,res, 'No se encuentran coincidencias', 404, e)
    })
})

router.get('/items/:id', (req, res) => {
    controller.getArticleJson(req.params.id)
    .then((article) => {
        response.success(req, res, article)
    })
    .catch((e) => {
        response.error(req,res, 'Articulo no encontrado', 404, e)
    })
})

module.exports = router
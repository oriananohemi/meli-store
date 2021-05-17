const products = require("../components/products/network");

const router = (server) => {
    server.use('/api', products)
}

module.exports = router;
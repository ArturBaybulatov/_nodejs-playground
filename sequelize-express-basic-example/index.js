const express = require('express');
const cors = require('cors');

const models = require('./models.js');


const app = express();

app.use(cors());


app.use('/', async function(req, res, next) {
    let products;

    try { products = await models.Product.findAll({ where1: { SupplierId: 1 } }) }
    catch (err) { return next(err) }

    res.json(products);
});


app.use(function errorHandler(err, req, res, next) {
    res.status(500).type('txt').send(err.message);
});


(async function() {
    try { await models._sequelize.sync() }
    catch (err) { return console.error(err) }


    const PORT = 8765;

    await app.listen(PORT);

    console.log(`App served at http://localhost:${ PORT }/`);
}());

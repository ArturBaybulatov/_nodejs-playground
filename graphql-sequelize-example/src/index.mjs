import Sequelize from 'sequelize';
import express from 'express';
import cors from 'cors';


const log = function(val) { console.log(val); return val }; // Debug

const sequelize = new Sequelize('postgres://postgres:12345678@localhost:5432/northwind');


const Product = sequelize.define('products', {
    productid: { type: Sequelize.INTEGER, primaryKey: true },
    productname: { type: Sequelize.STRING },
}, { timestamps: false });


const app = express();

app.use(cors());


app.get('/', async function(req, res) {
    const products = await Product.findAll();

    res.json(products);
});


const PORT = 8765;

app.listen(PORT);

console.log(`App served at http://localhost:${ PORT }/`);

const express = require('express');
const cors = require('cors');


const app = express();

app.use(cors());


app.use('/', async function(req, res, next) {
    setTimeout(() => res.json({ a: 'Foo', b: 'Bar' }), 3000);
});


app.use(function errorHandler(err, req, res, next) {
    res.status(500).type('txt').send(err.message);
});


(async function() {
    const PORT = 8765;

    await app.listen(PORT);

    console.log(`App served at http://localhost:${ PORT }/`);
}());

const graphqlHttp = require('express-graphql');
const express = require('express');
const cors = require('cors');

const schema = require('./schema.js');
const models = require('./models.js');


const app = express();

app.use(cors());

app.use('/', graphqlHttp({ schema, graphiql: true }));


models._sequelize.sync()
    .then(function() {
        const PORT = 8765;
        app.listen(PORT);
        console.log(`App served at http://localhost:${ PORT }/`);
    })

    .catch(console.error);

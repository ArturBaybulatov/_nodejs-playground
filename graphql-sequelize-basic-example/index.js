const express = require('express');
const cors = require('cors');
const graphqlHttp = require('express-graphql');

const schema = require('./schema.js');
const models = require('./models.js');


const init = async function() {
    const app = express();

    app.use(cors());

    app.use('/', graphqlHttp({ schema, graphiql: true }));


    await models._sequelize.sync();

    const PORT = 8765;
    app.listen(PORT);
    console.log(`App served at http://localhost:${ PORT }/`);
};


init();

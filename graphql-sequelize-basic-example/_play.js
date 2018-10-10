const models = require('./models.js');

global.log = function(val) { console.log(val); return val };


const init = async function() {
    const category = await models.Category.findById(5);
    const products = await category.getProducts();

    log(products.length);
};


init();

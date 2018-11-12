const models = require('./models.js');

global.log = function(name, val) {
    if (!(name == null || typeof name === 'number' || (typeof name === 'string' && name.trim() !== '')))
        throw new TypeError('A number or a string expected');

    if (name == null) {
        console.log('\n');
        console.log(val);
        console.log('\n');
    } else {
        console.log(`\n${ typeof name === 'string' ? name.trim() : name } ---------------------------\n`);
        console.log(val);
        console.log('\n');
    }

    return val;
};


const init = async function() {
    const category = await models.Category.findById(8);

    const products = await category.getProducts();
    

    if (false) {
        log('Products', await Promise.all(products.map(async x => Object.assign(
            { productName: x.ProductName },
            { categoryName: (await x.getCategory()).CategoryName },
        ))));
    }


    log('Category with products', {
        categoryName: category.CategoryName,
        productNames: products.map(x => x.ProductName),
    });
};


init();

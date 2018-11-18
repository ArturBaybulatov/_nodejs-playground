const models = require('./models.js');


global.log = function(val) { console.log(val); return val }

global.show = function(name) {
    if (arguments.length !== 1) throw new Error('Single argument expected');

    if (!(typeof name === 'number' || (typeof name === 'string' && name.trim() !== '')))
        throw new TypeError('A number or a non-empty string expected');

    return function(val) {
        console.log(`\n${ typeof name === 'string' ? name.trim() : name } ---------------------------\n`);
        console.log(val);
        console.log('\n');

        return val;
    }
};


const init = async function() {
    const category = await models.Category.findById(8);

    const products = await category.getProducts();
    

    show('Products')(await Promise.all(products.map(async x => Object.assign(
        { productName: x.ProductName },
        { categoryName: (await x.getCategory()).CategoryName },
    ))));
        

    show('Category with products')({
        categoryName: category.CategoryName,
        productNames: products.map(x => x.ProductName),
    });
};


init();

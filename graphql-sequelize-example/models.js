const Sequelize = require('sequelize');


const sequelize = module.exports._sequelize = new Sequelize('postgres://postgres:12345678@localhost:5432/northwind');


const Product = module.exports.Product = sequelize.define('products', {
    productid: { type: Sequelize.INTEGER, primaryKey: true },
    productname: { type: Sequelize.STRING, allowNull: false },
    supplierid: { type: Sequelize.INTEGER },
    categoryid: { type: Sequelize.INTEGER },
    quantityperunit: { type: Sequelize.STRING },
    unitprice: { type: Sequelize.FLOAT },
    unitsinstock: { type: Sequelize.INTEGER },
}, { timestamps: false });


const Supplier = module.exports.Supplier = sequelize.define('suppliers', {
    supplierid: { type: Sequelize.INTEGER, primaryKey: true },
    companyname: { type: Sequelize.STRING, allowNull: false },
    contactname: { type: Sequelize.STRING },
    contacttitle: { type: Sequelize.STRING },
    address: { type: Sequelize.STRING },
    city: { type: Sequelize.STRING },
    region: { type: Sequelize.STRING },
    postalcode: { type: Sequelize.STRING },
    country: { type: Sequelize.STRING },
    phone: { type: Sequelize.STRING },
}, { timestamps: false });


const Category = module.exports.Category = sequelize.define('categories', {
    categoryid: { type: Sequelize.INTEGER, primaryKey: true },
    categoryname: { type: Sequelize.STRING, allowNull: false },
    description: { type: Sequelize.STRING },
}, { timestamps: false });


Product.belongsTo(Supplier, { foreignKey: 'supplierid', targetKey: 'supplierid' });
Product.belongsTo(Category, { foreignKey: 'categoryid', targetKey: 'categoryid' });

const Sequelize = require('sequelize');


const sequelize = module.exports._sequelize = new Sequelize('sqlite:northwind.sqlite');


const Product = module.exports.Product = sequelize.define('Product', {
    Id: { type: Sequelize.INTEGER, primaryKey: true },
    ProductName: { type: Sequelize.STRING, allowNull: false },
    SupplierId: { type: Sequelize.INTEGER },
    CategoryId: { type: Sequelize.INTEGER },
    QuantityPerUnit: { type: Sequelize.STRING },
    UnitPrice: { type: Sequelize.FLOAT },
    UnitsInStock: { type: Sequelize.INTEGER },
}, { timestamps: false, freezeTableName: true });


const Supplier = module.exports.Supplier = sequelize.define('Supplier', {
    Id: { type: Sequelize.INTEGER, primaryKey: true },
    CompanyName: { type: Sequelize.STRING, allowNull: false },
    ContactName: { type: Sequelize.STRING },
    ContactTitle: { type: Sequelize.STRING },
    Address: { type: Sequelize.STRING },
    City: { type: Sequelize.STRING },
    Region: { type: Sequelize.STRING },
    Postalcode: { type: Sequelize.STRING },
    Country: { type: Sequelize.STRING },
    Phone: { type: Sequelize.STRING },
}, { timestamps: false, freezeTableName: true });


const Category = module.exports.Category = sequelize.define('Category', {
    Id: { type: Sequelize.INTEGER, primaryKey: true },
    CategoryName: { type: Sequelize.STRING, allowNull: false },
    Description: { type: Sequelize.STRING },
}, { timestamps: false, freezeTableName: true });


Product.belongsTo(Supplier, { foreignKey: 'SupplierId', targetKey: 'Id' });
Product.belongsTo(Category, { foreignKey: 'CategoryId', targetKey: 'Id' });

const Sequelize = require('sequelize');


const sequelize = module.exports._sequelize = new Sequelize('sqlite:northwind.sqlite', {
    define: { timestamps: false, freezeTableName: true },
    logging: false,
});


const Product = module.exports.Product = sequelize.define('Product', {
    Id: { type: Sequelize.INTEGER, primaryKey: true },
    ProductName: { type: Sequelize.STRING, allowNull: false },
    SupplierId: { type: Sequelize.INTEGER },
    CategoryId: { type: Sequelize.INTEGER },
    QuantityPerUnit: { type: Sequelize.STRING },
    UnitPrice: { type: Sequelize.FLOAT },
    UnitsInStock: { type: Sequelize.INTEGER },
});


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
});


const Category = module.exports.Category = sequelize.define('Category', {
    Id: { type: Sequelize.INTEGER, primaryKey: true },
    CategoryName: { type: Sequelize.STRING, allowNull: false },
    Description: { type: Sequelize.STRING },
});


Supplier.hasMany(Product, { foreignKey: 'SupplierId', sourceKey: 'Id' });
Product.belongsTo(Supplier, { foreignKey: 'SupplierId', targetKey: 'Id' });

Category.hasMany(Product, {foreignKey: 'CategoryId', sourceKey: 'Id'});
Product.belongsTo(Category, { foreignKey: 'CategoryId', targetKey: 'Id' });

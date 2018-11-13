const graphql = require('graphql');
const graphqlSequelize = require('graphql-sequelize');


const models = require('./models.js');


const productType = new graphql.GraphQLObjectType({
    name: 'Product',

    fields: () => Object.assign(graphqlSequelize.attributeFields(models.Product), {
        supplier: {
            type: supplierType,
            args: Object.assign(graphqlSequelize.defaultArgs(models.Supplier), graphqlSequelize.defaultListArgs()),
            resolve: graphqlSequelize.resolver(models.Supplier),
        },

        category: {
            type: categoryType,
            args: Object.assign(graphqlSequelize.defaultArgs(models.Category), graphqlSequelize.defaultListArgs()),
            resolve: graphqlSequelize.resolver(models.Category),
        },
    }),
});


const supplierType = new graphql.GraphQLObjectType({
    name: 'Supplier',

    fields: Object.assign(graphqlSequelize.attributeFields(models.Supplier), {
        products: {
            type: new graphql.GraphQLList(productType),
            args: Object.assign(graphqlSequelize.defaultArgs(models.Product), graphqlSequelize.defaultListArgs()),
            resolve: graphqlSequelize.resolver(models.Supplier.associations.Products),
        },
    }),
});


const categoryType = new graphql.GraphQLObjectType({
    name: 'Category',

    fields: Object.assign(graphqlSequelize.attributeFields(models.Category), {
        products: {
            type: new graphql.GraphQLList(productType),
            args: Object.assign(graphqlSequelize.defaultArgs(models.Product), graphqlSequelize.defaultListArgs()),
            resolve: graphqlSequelize.resolver(models.Category.associations.Products),
        },
    }),
});


const schema = module.exports = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: 'root',

        fields: {
            products: {
                type: new graphql.GraphQLList(productType),
                args: Object.assign(graphqlSequelize.defaultArgs(models.Product), graphqlSequelize.defaultListArgs()),
                resolve: graphqlSequelize.resolver(models.Product),
            },

            suppliers: {
                type: new graphql.GraphQLList(supplierType),
                args: Object.assign(graphqlSequelize.defaultArgs(models.Supplier), graphqlSequelize.defaultListArgs()),
                resolve: graphqlSequelize.resolver(models.Supplier),
            },

            categories: {
                type: new graphql.GraphQLList(categoryType),
                args: Object.assign(graphqlSequelize.defaultArgs(models.Category), graphqlSequelize.defaultListArgs()),
                resolve: graphqlSequelize.resolver(models.Category),
            },
        },
    }),
});

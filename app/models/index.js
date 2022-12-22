const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD, {
        host: config.HOST,
        dialect: config.dialect,
        operatorsAliases: false,
        port: 5432,

        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.product = require("../models/product.model.js")(sequelize, Sequelize);
db.order = require("../models/order.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
});
db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
});

db.user.hasMany(db.order, {
    as: 'Customer',
    foreignKey: 'customerId',
    onDelete: 'CASCADE'
});
db.order.belongsTo(db.user, {
    as: 'Customer',
    foreignKey: 'customerId'
});

db.product.belongsToMany(db.order, {
    through: "product_ordered",
    foreignKey: "productId",
    otherKey: "orderId",
    onDelete: 'cASCADE'
});
db.order.belongsToMany(db.product, {
    through: "product_ordered",
    foreignKey: "orderId",
    otherKey: "productId",
    onDelete: 'CASCADE'
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
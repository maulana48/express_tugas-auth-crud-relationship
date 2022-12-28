const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.User, {
                as: 'Customer',
                foreignKey: 'CustomerId',
                onDelete: 'NO ACTION',
                onUpdate: 'NO ACTION',
            });
            this.belongsToMany(models.Product, {
                through: "ProductOrdered",
                foreignKey: 'ProductId',
                otherKey: "ProductId",
                onDelete: 'CASCADE'
            });
        }
    }
    Order.init({
        CustomerId: DataTypes.INTEGER,
        ProductId: DataTypes.INTEGER,
        orderDate: DataTypes.DATE,
        status: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Order',
        timestamps: true,
    });
    return Order;
};
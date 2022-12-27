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
                foreignKey: 'userId',
                onDelete: 'NO ACTION',
                onUpdate: 'NO ACTION',
            });
            this.belongsTo(models.Product, {
                foreignKey: 'productId',
                onDelete: 'NO ACTION',
                onUpdate: 'NO ACTION',
            });
        }
    }
    Order.init({
        userId: DataTypes.INTEGER,
        productId: DataTypes.INTEGER,
        orderDate: DataTypes.DATE,
        status: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Order',
        timestamps: true,
    });
    return Order;
};
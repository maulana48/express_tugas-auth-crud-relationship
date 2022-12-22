module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("orders", {
        tanggal_order: {
            type: Sequelize.DATEONLY,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        status: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }
    });

    return Order;
};
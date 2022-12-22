module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("products", {
        nama: {
            type: Sequelize.STRING,
            unique: true
        },
        UOM: {
            type: Sequelize.STRING,
            allowNull: false
        },
        stock: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        harga: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });

    return Product;
};
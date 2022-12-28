const db = require("../models");
const Product = db.Product;

exports.seed = () => {
    // Save User to Database
    Product.create({
        nama: "test",
        UOM: "test",
        stock: 30,
        harga: 10000
    });

    Product.create({
        nama: "test1",
        UOM: "test1",
        stock: 40,
        harga: 20000
    });
    Product.create({
        nama: "test2",
        UOM: "test2",
        stock: 60,
        harga: 30000
    });
};
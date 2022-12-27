const db = require("../models");
const Product = db.product;
const Order = db.order;
const User = db.User;

exports.seed = () => {
    // Save User to Database
    Order.create({
        tanggal_order: "2022-10-10",
        status: 2
    }).then(order => {
        order.setCustomer([3]);
        order.setProducts([1, 2, 3]);
    });

    Order.create({
        tanggal_order: "2022-10-10",
        status: 1
    }).then(order => {
        order.setCustomer([5]);
        order.setProducts([1, 3]);
    });
    Order.create({
        tanggal_order: "2022-10-10",
        status: 1
    }).then(order => {
        order.setCustomer([5]);
        order.setProducts([2]);
    });
};
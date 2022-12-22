const db = require('../models')
const Order = db.order

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.getAll = async (req, res) => {
    let order = await Order.findAll();
    res.status(200).send(order);
};

exports.getOrder = async (req, res) => {
    let id = req.params.id;
    let order = await Order.findOne({
        where: {
            id: id
        }
    })
    res.status(200).send(order);
};

exports.updateOrder = async (req, res) => {
    let id = req.params.id;
    let order = await Order.update(req.body, {
        where: {
            id: id
        }
    })
    order = await Order.findByPk(id);
    res.status(200).send({
        msg: "order updated succesfully",
        order: order
    });
}

exports.deleteOrder = async (req, res) => {
    let id = req.params.id
    let order = await Order.destroy({
        where: {
            id: id
        }
    })
    res.status(200).send({
        msg: "order deleted succesfully",
        order: order
    });
}
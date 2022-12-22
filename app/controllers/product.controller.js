const db = require('../models')
const Product = db.product

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.getAll = async (req, res) => {
    let product = await Product.findAll();
    res.status(200).send(product);
};

exports.getProduct = async (req, res) => {
    let id = req.params.id;
    let product = await Product.findOne({
        where: {
            id: id
        }
    })
    res.status(200).send(product);
};

exports.updateProduct = async (req, res) => {
    let id = req.params.id;
    let product = await Product.update(req.body, {
        where: {
            id: id
        }
    })
    product = await Product.findByPk(id);
    res.status(200).send({
        msg: "product updated succesfully",
        product: product
    });
}

exports.deleteProduct = async (req, res) => {
    let id = req.params.id
    let product = await Product.destroy(req.body, {
        where: {
            id: id
        }
    })
    res.status(200).send({
        msg: "product deleted succesfully",
        product: product
    });
}
const db = require('../models')
const User = db.user

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.getAll = async (req, res) => {
    let user = await User.findAll();
    res.status(200).send(user);
};

exports.getUser = async (req, res) => {
    let id = req.params.id;
    let user = await User.findOne({
        where: {
            id: id
        }
    })
    res.status(200).send(user);
};

exports.updateUser = async (req, res) => {
    let id = req.params.id;
    let user = await User.update(req.body, {
        where: {
            id: id
        }
    })
    user = await User.findByPk(id);
    res.status(200).send({
        msg: "user updated succesfully",
        user: user
    });
}

exports.deleteUser = async (req, res) => {
    let id = req.params.id
    let user = await User.destroy(req.body, {
        where: {
            id: id
        }
    })
    res.status(200).send({
        msg: "user deleted succesfully",
        user: user
    });
}

exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
};
const db = require("../models");
const User = db.user;
const Role = db.role;

var bcrypt = require("bcryptjs");

exports.seed = () => {
    // Save User to Database
    User.create({
        username: "test",
        email: "test@gmail.com",
        alamat: "test",
        gender: "test",
        tanggal_lahir: '2022-01-05',
        password: bcrypt.hashSync("test")
    }).then(user => {
        user.setRoles([1]);
    });

    User.create({
        username: "test1",
        email: "test1@gmail.com",
        alamat: "test1",
        gender: "test1",
        tanggal_lahir: '2002-11-14',
        password: bcrypt.hashSync("test1")
    }).then(user => {
        user.setRoles([2]);
    });
    User.create({
        username: "test2",
        email: "test2@gmail.com",
        alamat: "test2",
        gender: "test2",
        tanggal_lahir: '2000-09-02',
        password: bcrypt.hashSync("test2")
    }).then(user => {
        user.setRoles([3]);
    });
};
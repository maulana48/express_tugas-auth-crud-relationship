const db = require("../models");
const User = db.User;
const Role = db.Role;

var bcrypt = require("bcryptjs");

exports.seed = () => {
    // Save User to Database
    User.create({
        firstName: "test",
        lastName: "test",
        username: "test",
        email: "test@gmail.com",
        address: "test",
        gender: "F",
        tanggal_lahir: '2022-01-05',
        password: bcrypt.hashSync("test")
    }).then(user => {
        user.setRoles([3]);
    });

    User.create({
        firstName: "test1",
        lastName: "test1",
        username: "test1",
        email: "test1@gmail.com",
        address: "M",
        gender: "test1",
        tanggal_lahir: '2002-11-14',
        password: bcrypt.hashSync("test1")
    }).then(user => {
        user.setRoles([2]);
    });
    User.create({
        firstName: "test2",
        lastName: "test2",
        username: "test2",
        email: "test2@gmail.com",
        address: "M",
        gender: "test2",
        tanggal_lahir: '2000-09-02',
        password: bcrypt.hashSync("test2")
    }).then(user => {
        user.setRoles([4]);
    });
    User.create({
        firstName: "test3",
        lastName: "test3",
        username: "test3",
        email: "test3@gmail.com",
        address: "M",
        gender: "test3",
        tanggal_lahir: '2000-09-02',
        password: bcrypt.hashSync("test3")
    }).then(user => {
        user.setRoles([4]);
    });
    User.create({
        firstName: "test4",
        lastName: "test4",
        username: "test4",
        email: "test4@gmail.com",
        address: "M",
        gender: "test4",
        tanggal_lahir: '2000-09-02',
        password: bcrypt.hashSync("test4")
    }).then(user => {
        user.setRoles([4]);
    });
};
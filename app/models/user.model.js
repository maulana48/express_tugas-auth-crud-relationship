module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        username: {
            type: Sequelize.STRING,
            unique: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        alamat: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.TEXT('tiny')
        },
        tanggal_lahir: {
            type: Sequelize.DATEONLY,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        password: {
            type: Sequelize.STRING
        }
    });

    return User;
};
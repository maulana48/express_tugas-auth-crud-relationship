'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsToMany(models.Role, {
                through: "User_Roles",
                foreignKey: "userId",
                otherKey: "roleId"
            })
        }
    }
    User.init({
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        address: DataTypes.STRING,
        gender: DataTypes.TEXT('tiny'),
        tanggal_lahir: DataTypes.DATEONLY,
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};
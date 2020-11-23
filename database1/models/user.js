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
      User.hasMany(models.Post, {
        foreignKey: 'Post',
        onDelete: 'CASCADE'
      })
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    dateOfBirth: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    description: DataTypes.STRING,
    QrCode: DataTypes.STRING,
    profileImage: DataTypes.STRING,
    coverImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

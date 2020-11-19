const { Model, Sequelize } = require('sequelize');
const sequelize = require('../database/index')
class Users extends Model {}
Users.init({
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  userName: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  dateOfBirth: Sequelize.STRING,
  phoneNumber: Sequelize.INTEGER,
  description: Sequelize.STRING,
  QRCode: Sequelize.STRING,
  profileImage: Sequelize.STRING,
  coverImage: Sequelize.STRING,
  adressId : Sequelize.INTEGER,
}, { sequelize, modelName: 'users' });

module.exports = Users;
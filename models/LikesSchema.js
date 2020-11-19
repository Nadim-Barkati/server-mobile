const { Model, Sequelize } = require('sequelize');
const sequelize = require('../index')
class Likes extends Model {}
Likes.init({
    IDPost: Sequelize.INTEGER,
    UserId: Sequelize.INTEGER,
}, { sequelize, modelName: 'likes' });
const { Model, Sequelize } = require('sequelize');
const sequelize = require('../database/index')
class Likes extends Model {}
Likes.init({
    IdPost: Sequelize.INTEGER,
    UserId: Sequelize.INTEGER,

}, { sequelize, modelName: 'likes' });














module.exports = Likes;
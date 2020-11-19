const { Model, Sequelize } = require('sequelize');
const sequelize = require('../index')
class Comment extends Model {}
Comment.init({
    IDPost: Sequelize.INTEGER,
    UserId: Sequelize.INTEGER,
    Content: Sequelize.STRING,
    timestamp: Sequelize.INTEGER,
}, { sequelize, modelName: 'comment' });
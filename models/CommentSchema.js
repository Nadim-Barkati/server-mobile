const { Model, Sequelize } = require('sequelize');
const sequelize = require('../database/index')
class Comment extends Model {}
Comment.init({
    IDPost: Sequelize.INTEGER,
    UserId: Sequelize.INTEGER,
    Content: Sequelize.STRING,
    timestamp: Sequelize.INTEGER
}, { sequelize, modelName: 'comment' });



module.exports = Comment ;
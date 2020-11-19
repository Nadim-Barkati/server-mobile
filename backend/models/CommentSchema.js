const { Model, Sequelize } = require('sequelize');
const sequelize = require('../database/index')
class Comment extends Model {}
Comment.init({
    idPost: Sequelize.INTEGER,
    userId: Sequelize.INTEGER,
    content: Sequelize.STRING,
}, { sequelize, modelName: 'comment' , timestamp : true  });

module.exports = Comment ;
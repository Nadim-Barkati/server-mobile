const { Model, Sequelize } = require('sequelize');
const sequelize = require('../index')
class Post extends Model {}
Post.init({
    Content: Sequelize.STRING,
    UserId: Sequelize.INTEGER,
    UrlMedia: Sequelize.STRING,
    timestamp: Sequelize.INTEGER,
}, { sequelize, modelName: 'post' });


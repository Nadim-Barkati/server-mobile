const { Model, Sequelize } = require('sequelize');
const sequelize = require('../database/index');
class Post extends Model {}
Post.init({
    content: Sequelize.STRING,
    userId: Sequelize.INTEGER,
    urlMedia: Sequelize.STRING,
   
}, { sequelize, modelName: 'post', timestamp : true   });

module.exports = Post;
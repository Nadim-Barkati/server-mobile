const { Model, Sequelize } = require('sequelize');
const sequelize = require('../database/index')
class Media extends Model {}
Media.init({
fileUrl:Sequelize.STRING,
duration:Sequelize.INTEGER,
isVideo : Sequelize.BOOLEAN,
postID : Sequelize.INTEGER

}, { sequelize, modelName: 'media' });

module.exports = Media;
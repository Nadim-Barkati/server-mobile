const { Model, Sequelize } = require('sequelize');
const sequelize = require('../database/index')
class Media extends Model {}
Media.init({
fileUrl:Sequelize.String,
duration:Sequelize.Integer,
isVideo : Sequelize.Boolean,
postID : Sequelize.Integer

}, { sequelize, modelName: 'Media' });

module.exports = Media;
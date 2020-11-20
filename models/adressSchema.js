const { Model, Sequelize } = require('sequelize');
const sequelize = require('../database/index')
class Adress extends Model {}
Adress.init({
    adress: Sequelize.STRING,
    city: Sequelize.STRING,
    country: Sequelize.STRING,
    zipcode: Sequelize.INTEGER,
    userId: Sequelize.INTEGER,
    }, { sequelize, modelName: 'adress' });
    
    module.exports = Adress;
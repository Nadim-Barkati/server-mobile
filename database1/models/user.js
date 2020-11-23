'use strict';
var Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    dateOfBirth: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    description: DataTypes.STRING,
    QrCode: DataTypes.STRING,
    profileImage: DataTypes.STRING,
    coverImage: DataTypes.STRING
  },{})
  User.associate= function(models){
     User.hasMany(models.Post, {
       foreignKey: 'userId',
     })
   
   }
   return User;
  };


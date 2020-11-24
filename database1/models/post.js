'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      })
      Post.hasMany(models.Comment, {
        foreignKey: 'commentId',
        onDelete: 'CASCADE'
      })
      Post.hasMany(models.Like, {
        foreignKey: 'likeId',
        onDelete: 'CASCADE'
      })
      Post.hasOne(models.Media, {
        foreignKey: 'mediaId',
        onDelete: 'CASCADE'
      })
    }
  };
  Post.init({
   content: DataTypes.STRING,
   userId: DataTypes.INTEGER,
   urlMedia: DataTypes.STRING,
   //add mediaId!!!
   commentId: DataTypes.INTEGER,
   likeId: DataTypes.INTEGER
}, {
  sequelize,
  modelName: 'Post',
});
return Post;
};
 
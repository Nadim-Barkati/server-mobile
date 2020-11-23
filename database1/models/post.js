module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
   content: DataTypes.STRING,
   userId: DataTypes.INTEGER,
   urlMedia: DataTypes.STRING,
   commentId: DataTypes.INTEGER,
   likeId: DataTypes.INTEGER
  },{})
 Post.associate= function(models){
    Post.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete:'cascade',
    })
  
  }
  return Post;
 };
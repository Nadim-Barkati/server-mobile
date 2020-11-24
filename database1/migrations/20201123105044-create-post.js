'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
     queryInterface.createTable('Post', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        onDelete: 'cascade',
        references: {
          model:'User',
          key : 'id', 
          as : 'userId'
        }
      },
      urlMedia: {
        type: Sequelize.STRING
      },
      commentId: {
        type: Sequelize.INTEGER,
        onDelete: 'cascade',
        references: {
          model:'Comment',
          key : 'id', 
          as : 'commentId'
        } 
      },
      likeId: {
        type: Sequelize.INTEGER,
        onDelete: 'cascade',
        references: {
          model:'Like',
          key : 'id', 
          as : 'likeId'
        } 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
     queryInterface.dropTable('Post');
  }
};
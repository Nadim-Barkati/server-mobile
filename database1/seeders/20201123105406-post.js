'use strict';

module.exports = {
  up:(queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Post', [{
      content: "jhnfghfghfg",
      userId:1,
      urlMedia:"sdfdsfsdfsdfd" ,
      commentId:2 ,
      likeId:2 ,
      createdAt: new Date() ,
      updatedAt: new Date() 
    }], {});
},
  down:(queryInterface, Sequelize) => {
  
    return queryInterface.bulkDelete('Post', null, {});
  }
};

'use strict';

module.exports = {
  up:(queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('User', [{
      firstName: 'Franko',
      lastName: 'Doe',
      username: 'Jhonny',
      email: 'demo@demo.com',
      password: '$321!pass!123$',
      dateOfBirth: '12/04/1999',
      phoneNumber: '22145465',
      description: 'fccsxvzjeuvciure',
      QRCode: 'fzuefcuirgeoivvgri',
      profileImage: 'vxjhzebcvfkejvh',
      coverImage: 'cxsaghxchjzvdc',
      adressId : 'vcdvcjfh',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
},
  down:(queryInterface, Sequelize) => {
  
    return queryInterface.bulkDelete('User', null, {});
  }
};

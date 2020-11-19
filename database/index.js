const Sequelize = require('sequelize');

const sequelize = new Sequelize("b7ntfkr2a8u3hwajcm3s", "uvullsjgrdrwg4q3", "lCrNLDAxMglq1SQrckm1", {
    host:"b7ntfkr2a8u3hwajcm3s-mysql.services.clever-cloud.com",

    dialect: 'mysql',
    logging: false,
});

sequelize
.authenticate()
.then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

    sequelize.sync();

    module.exports = sequelize;
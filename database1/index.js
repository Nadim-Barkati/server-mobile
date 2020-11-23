const Sequelize = require('sequelize');
const config = require('config');
const dbConfig = config.get('postgres');

const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host:dbConfig.host,
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
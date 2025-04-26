const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'academia_db',
    'root',
    'contraseña',
    {
        host: 'localhost',
        dialect: 'mysql',
    });

module.exports = sequelize;
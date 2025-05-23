const { DataTypes } = require('sequelize');
const sequelize = require ('../config/database');

const Estudiantes = sequelize.define('Estudiante', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    fecha_nacimiento: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    }
});

module.exports = Estudiantes;
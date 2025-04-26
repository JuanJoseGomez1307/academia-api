const Curso = require('../curso.model');
const Estudiante = require('../estudiante.model');
const Matricula = require('../matricula.model');

Estudiante.belongsToMany(Curso, { throught: Matricula });
Curso.belongsToMany(Estudiante, { throught: Matricula });

module.exports = {
    Curso,
    Estudiante,
    Matricula
};
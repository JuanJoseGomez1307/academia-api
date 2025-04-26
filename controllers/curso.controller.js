const { Curso } = require('../models');

exports.getCursos = async (req, res) => {
    const cursos = await Curso.findAll();
    res.json(cursos);
};

exports.createCurso = async (req, res) => {
    const cursos = await Curso.findAll();
    res.json(cursos);
};

exports.updateCurso = async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, duracion_horas } = req.body;
    const curso = await Curso.findByPk(id);
    if (!curso) 
        return res.status(404).json(
    {message: 'Curso no encontrado.'});

    await curso.update({
        nombre,
        descripcion,
        duracion_horas
    });
    res.json(curso);
};

exports.deleteCurso = async (req, res) => {
    const { id } = req.params;
    const curso = await Curso.findByPk(id);
    if (!curso)
        return res.status(404).json({
    message: 'Curso no encontrado.'});

    await curso.destroy();
    res.json({ message: 'Curso eliminado.'});
};
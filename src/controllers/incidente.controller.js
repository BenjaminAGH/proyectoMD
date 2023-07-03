const Incidente = require('../models/incidente.model.js');

exports.getIncidentes = async (req, res) => {
  try {
    const incidentes = await Incidente.find();
    res.status(200).json(incidentes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createIncidente = async (req, res) => {
  try {
    const incidente = new Incidente({
      titulo: req.body.titulo,
      tipo: req.body.tipo,
      gravedad: req.body.gravedad,
      descripcion: req.body.descripcion,
      completado: req.body.completado,
      usuario: req.body.usuario,
      fecha: req.body.fecha,
    });

    const nuevoIncidente = await incidente.save();
    res.status(201).json(nuevoIncidente);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
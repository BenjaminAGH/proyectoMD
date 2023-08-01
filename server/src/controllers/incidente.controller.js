const Incidente = require('../models/incidente.model.js');

exports.getIncidente = async (req, res) => {
  try {
    const incidente = await Incidente.findById(req.params.id);
    res.status(200).json(incidente);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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
      incidente: req.body.incidente,
      usuario: req.body.usuario,
      fecha: req.body.fecha,
    });

    console.log(req.body);
    const nuevoIncidente = await incidente.save();
    res.status(201).json(nuevoIncidente);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateIncidente = async (req, res) => {
  try{
    const incidente = await Incidente.findById(req.params.id);
    if (req.body.titulo) {
      incidente.titulo = req.body.titulo;
    }
    if (req.body.tipo) {
      incidente.tipo = req.body.tipo;
    }
    if (req.body.gravedad) {
      incidente.gravedad = req.body.gravedad;
    }
    if (req.body.descripcion) {
      incidente.descripcion = req.body.descripcion;
    }
    if (req.body.completado) {
      incidente.completado = req.body.completado;
    }

    const incidenteActualizado = await incidente.save();
    res.status(200).json(incidenteActualizado);
  }
  catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteIncidente = async (req, res) => {
  try {
    const incidente = await Incidente.findById(req.params.id);
    const incidenteEliminado = await incidente.deleteOne();
    res.status(200).json(incidenteEliminado);
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
}

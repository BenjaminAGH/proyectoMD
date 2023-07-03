const mongoose = require('mongoose');

// Crea el esquema incidente
const incidenteSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    unique: true,
  },
  tipo: {
    type: String,
    required: true,
    enum: ['seguridad', 'medico', 'equipo']
  },
  gravedad: {
    type: String,
    required: true,
    enum: ['bajo', 'medio', 'grave']
  },
  descripcion: {
    type: String,
    required: true,
  },
  completado: {
    type: Boolean,
    default: false,
    required: true
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  fecha: {
    type: Date,
    default: Date.now
  }
});


const Incidente = mongoose.model('Incidente', incidenteSchema);
module.exports = Incidente;
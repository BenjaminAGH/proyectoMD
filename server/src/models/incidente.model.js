const mongoose = require('mongoose');

// Crea el esquema incidente
const incidenteSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  tipo: {
    type: String,
    enum: ['Seguridad', 'Medico', 'Equipo']
  },
  gravedad: {
    type: String,
    enum: ['Baja', 'Media', 'Grave']
  },
  descripcion: {
    type: String,
    required: true
  },
  completado: {
    type: Boolean,
    default: false,
  },
  usuario: {
    type: String,
  },
  fecha: {
    type: Date,
    default: Date.now
  },
});


const Incidente = mongoose.model('Incidente', incidenteSchema);
module.exports = Incidente;
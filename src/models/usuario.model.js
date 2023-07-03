const mongoose = require('mongoose');

// Crea el esquema usuario
const usuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  cargo: {
    type: String,
    enum: ['brigadista', 'supervisor']
  },
});


const Usuario = mongoose.model('Usuario', usuarioSchema);
module.exports = Usuario;
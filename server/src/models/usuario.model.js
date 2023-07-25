const mongoose = require('mongoose');

// Crea el esquema usuario
const usuarioSchema = new mongoose.Schema({
  usuario: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  contraseña: {
    type: String,
    required: true
  },
  cargo: {
    type: String,
    enum: ['brigadista', 'supervisor']
  },
  admin: {
    type: Boolean,
    default: false,
    required: true
  }
});


const Usuario = mongoose.model('Usuario', usuarioSchema);
module.exports = Usuario;
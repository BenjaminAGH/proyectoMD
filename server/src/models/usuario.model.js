const mongoose = require('mongoose');

// Crea el esquema usuario
const usuarioSchema = new mongoose.Schema({
  rut: {
    type: String,
    required: true,
    unique: true,
    match: [/^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/, "Rut inválido"]
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  contrasena: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean,
    default: false
  }
});


const Usuario = mongoose.model('Usuario', usuarioSchema);
module.exports = Usuario;
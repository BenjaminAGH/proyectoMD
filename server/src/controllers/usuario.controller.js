const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario.model.js');

exports.getUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createUsuario = async (req, res) => {
  try {
    const usuario = new Usuario({
      rut: req.body.rut,
      email: req.body.email,
      contrasena: req.body.contrasena,
      admin: req.body.admin,
    });

    const nuevoUsuario = await usuario.save();
    console.log(res.body);
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    console.log(usuario.admin);
    if (req.body.rut) {
      usuario.rut = req.body.usuario;
    }
    if (req.body.email) {
      usuario.email = req.body.email;
    }
    if (req.body.contrasena) {
      usuario.contrasena = req.body.contrasena;
    }
    if (req.body.admin) {
      usuario.admin = req.body.admin;
    }
    const usuarioActualizado = await usuario.save();
    res.status(200).json(usuarioActualizado);
    
  }
  catch (error) {
    res.status(400).json({ message: error.message });
  }
}

exports.deleteUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    const usuarioEliminado = await usuario.deleteOne();
    res.status(200).json(usuarioEliminado);
  }catch (error) {
    res.status(500).json({ message: error.message });
  }
}

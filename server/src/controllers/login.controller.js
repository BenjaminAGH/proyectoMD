const Usuario = require('../models/usuario.model.js');

exports.loginUsuario = async (req, res) => {
  try {
    const { email, contrasena, rut } = req.body;

    const usuario = await Usuario.findOne({ email });
    const userRut =  await Usuario.findOne({ rut })
    

    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no registrado.' });
    }

    if (usuario.contrasena !== contrasena) {
      return res.status(401).json({ message: 'Contraseña incorrecta.' });
    }

    req.session.usuarioId = usuario._id;

    return res.status(200).json({ message: 'Inicio de sesión exitoso.', usuario, userRut });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
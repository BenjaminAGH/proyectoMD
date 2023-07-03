const express = require('express');
const router = express.Router();

//Usuario
const usuarioController = require('../controllers/usuario.controller.js');

router.get('/', usuarioController.getUsuarios);
router.post('/', usuarioController.createUsuario);


module.exports = router;
const express = require('express');
const router = express.Router();

//Usuario
const usuarioController = require('../controllers/usuario.controller.js');

router.get('/', usuarioController.getUsuarios);
router.post('/', usuarioController.createUsuario);
router.put('/:id', usuarioController.updateUsuario);
router.delete('/:id', usuarioController.deleteUsuario);


module.exports = router;

const express = require('express');
const router = express.Router();

//Incidente
const loginController = require('../controllers/login.controller.js');

router.post('/', loginController.loginUsuario);


module.exports = router;
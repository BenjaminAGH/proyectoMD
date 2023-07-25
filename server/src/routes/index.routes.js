const express = require('express');
const router = express.Router();

//Usuario
const usuarioRoutes = require('./usuario.routes.js');
router.use('/usuarios', usuarioRoutes);

//Incidente
const incidenteRoutes = require('./incidente.routes.js');
router.use('/incidentes', incidenteRoutes);

module.exports = router;
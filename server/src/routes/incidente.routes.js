const express = require('express');
const router = express.Router();

//Incidente
const incidenteController = require('../controllers/incidente.controller.js');

router.get('/', incidenteController.getIncidentes);
router.post('/', incidenteController.createIncidente);


module.exports = router;
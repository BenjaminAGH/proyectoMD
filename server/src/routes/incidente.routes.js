const express = require('express');
const router = express.Router();

//Incidente
const incidenteController = require('../controllers/incidente.controller.js');

router.get('/', incidenteController.getIncidentes);
router.post('/', incidenteController.createIncidente);
router.put('/:id', incidenteController.updateIncidente);
router.delete('/:id', incidenteController.deleteIncidente);
router.get('/:id', incidenteController.getIncidente);

module.exports = router;
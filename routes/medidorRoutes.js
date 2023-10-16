const express = require('express');
const router = express.Router();
const medidorController = require('../controllers/medidorController');

router.get('/', medidorController.listarMedidores);
router.post('/', medidorController.crearMedidor);
router.put('/:codigo', medidorController.actualizarMedidor);
router.delete('/:codigo', medidorController.eliminarMedidor);

module.exports = router;

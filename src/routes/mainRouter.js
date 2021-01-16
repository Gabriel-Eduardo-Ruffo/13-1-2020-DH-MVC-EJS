// Referencia a express y Router
const express = require ('express');
const router = express.Router();

// Refererncia al controlador mainRouter
const mainController = require ('../controllers/mainController');

// Listado de rutas a las que se pueden acceder (router.get('/',) y que hay dentro de cada ruta (mainRouter.metodo)
router.get('/', mainController.index);
router.get('/detalle/:id', mainController.detalleMenu);
router.get('/*',mainController.error);

// Devolvemos el resultado de la ruta particular que se accedio
module.exports = router;
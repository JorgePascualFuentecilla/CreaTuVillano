import express from 'express';
import { asignarPoderes } from '../controllers/poderesMonstruos/poderesMonstruosController.js';

const router = express.Router();

// Ruta para asignar poderes
router.get('/asignar-poderes', asignarPoderes);

export default router;

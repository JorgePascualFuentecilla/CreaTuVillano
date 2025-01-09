import { Router } from 'express';
import monstruosApiController from '../controllers/monstruos/monstruosApiController.js';

const router = Router();

// Ruta para obtener todos los monstruos
router.get('/', monstruosApiController.getAll);

// Ruta para obtener un monstruo por ID
router.get('/:id', monstruosApiController.getById);

export default router;

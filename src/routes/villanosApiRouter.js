import { Router } from 'express';
import villanosApiController from '../controllers/villanos/villanosApiController.js';

const router = Router();

// Ruta para obtener todos los villanos
router.get('/', villanosApiController.getAll);

// Ruta para obtener un villano por ID
router.get('/:id', villanosApiController.getById);

export default router;
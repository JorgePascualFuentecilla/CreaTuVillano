import { Router } from 'express';
import poderesApiController from '../controllers/poderes/poderesApiController.js';

const router = Router();

router.get('/', poderesApiController.getAll);
router.get('/:id', poderesApiController.getById);

//router.post('/', poderesApiController.createNew);

export default router;
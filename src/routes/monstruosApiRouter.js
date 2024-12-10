import { Router } from 'express';
import monstruosApiController from '../controllers/monstruos/monstruosApiController.js';

const router = Router();

router.get('/', monstruosApiController.getAll);
router.get('/:id', monstruosApiController.getById);

//router.post('/', monstruosApiController.createNew);

export default router;
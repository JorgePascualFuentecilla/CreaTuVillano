import { Router } from 'express';
import villanosApiController from '../controllers/villanos/villanosApiController.js';

const router = Router();

router.get('/', villanosApiController.getAll);
router.get('/:id', villanosApiController.getById);

//router.post('/', villanosApiController.createNew);

export default router;
import { Router } from 'express';
import ModeloApiController from '../controllers/userApiController.js';

const router = Router();

router.get('/', ModeloApiController.getAll);

//router.post('/', ModeloApiController.createNew);

export default router;
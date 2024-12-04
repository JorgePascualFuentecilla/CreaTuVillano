import { Router } from 'express';
import modeloApiRouter from './modeloApiRouter.js';

const router = Router();

router.use('/villanos', modeloApiRouter);

export default router;
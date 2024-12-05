import { Router } from 'express';
import villanosApiRouter from './villanosApiRouter.js';
import monstruosApiRouter from './monstruosApiRouter.js';

const router = Router();

router.use('/villanos', villanosApiRouter);
router.use('/monstruos', monstruosApiRouter);

export default router;
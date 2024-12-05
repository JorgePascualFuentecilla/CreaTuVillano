import { Router } from 'express';
import villanosApiRouter from './villanosApiRouter.js';
import monstruosApiRouter from './monstruosApiRouter.js';
import poderesApiRouter from './poderesApiRouter.js';

const router = Router();

router.use('/villanos', villanosApiRouter);
router.use('/monstruos', monstruosApiRouter);
router.use('/poderes', poderesApiRouter);
export default router;
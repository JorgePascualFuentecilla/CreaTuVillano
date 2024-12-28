import { Router } from 'express';
import villanosApiRouter from './villanosApiRouter.js';
import monstruosApiRouter from './monstruosApiRouter.js';

const router = Router();

router.use('/villanos', villanosApiRouter);
router.use('/monstruos', monstruosApiRouter);


router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Error interno del servidor' });
});

export default router;
import { Router } from 'express';
import alunoController from '../controllers/AlunoController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', alunoController.index);
router.get('/:idUrl', alunoController.show);

router.post('/', loginRequired, alunoController.store);
router.delete('/:idUrl', loginRequired, alunoController.delete);
router.put('/:idUrl', loginRequired, alunoController.update);

export default router;

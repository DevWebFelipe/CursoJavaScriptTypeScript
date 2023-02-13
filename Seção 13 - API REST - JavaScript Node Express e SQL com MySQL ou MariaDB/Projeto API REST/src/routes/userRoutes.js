import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// em um sistema real normalmente não se usa
router.get('/', userController.index); // Lista todos os usuários
router.get('/:id', userController.show); // Lista 1 usuário

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

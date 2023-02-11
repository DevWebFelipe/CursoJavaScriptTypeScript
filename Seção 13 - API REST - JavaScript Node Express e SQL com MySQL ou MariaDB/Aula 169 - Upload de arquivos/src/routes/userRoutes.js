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

/*
 cada controler, pode ter até 5 métodos, não é uma regra, está mais para um padrão assim

 index GET -> Lista todos os registros
 store/create POST -> Cria um novo registro
 delete DELETE -> Apaga um registro
 show GET -> Mostra um registro
 update PATCH ou PUT -> Altera um registro

 PATCH -> Normalmente usado para editar um campo apenas
 PUT -> Normalmente usado para editar o registro inteiro
*/

import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);

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

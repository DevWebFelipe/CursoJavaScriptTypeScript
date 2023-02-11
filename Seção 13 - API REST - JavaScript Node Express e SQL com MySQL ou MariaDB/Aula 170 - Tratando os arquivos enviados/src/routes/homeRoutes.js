import { Router } from 'express';
import homeController from '../controllers/HomeController';

const router = new Router();

router.get('/', homeController.index);

export default router;

/*
 cada controler, pode ter até 5 métodos, não é uma regra, está mais para um padrão assim

 index GET -> Lista todos os registros
 store/create POST -> Cria um novo registro
 delete DELETE -> Apaga um registro
 show GET -> Mostra um registro
 update PACTH ou PUT -> Altera um registro
*/

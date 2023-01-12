import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/LoginRequired';

const router = new Router();

router.post('/', loginRequired, userController.store);

// Não deveria existir - Segurança
router.get('/', userController.index); // Listar usuários?
router.get('/:id', userController.show);

// tirando o ":id" dps da barrar - usuário pode editar/apagar só os próprios dados
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/* Métodos (Padrão é 5) / Padrões:
  index -> lista todos os usuários (GET)
  store/create -> cria um novo usuário (POST)
  delete -> apaga um usuário (DELETE)
  show -> mostra um usuário (GET)
  update -> atualiza um usuário (PATCH, altera somente um valor
  OU PUT, substitui um objeto inteiro)
*/

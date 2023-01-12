import { Router } from 'express';
import alunoController from '../controllers/AlunoController';
import loginRequired from '../middlewares/LoginRequired';

const router = new Router();

// Rotas abertas
router.get('/', alunoController.index);
router.get('/:id', alunoController.show);

// Rotas fechadas, somente acesso com login
router.post('/', loginRequired, alunoController.store);
router.put('/:id', loginRequired, alunoController.update);
router.delete('/:id', loginRequired, alunoController.delete);

export default router;

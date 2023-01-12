import { Router } from 'express';
// Módulos locais embaixo
import fotoController from '../controllers/FotoController';
import loginRequired from '../middlewares/LoginRequired';

const router = new Router();

router.post('/', loginRequired, fotoController.store);

export default router;

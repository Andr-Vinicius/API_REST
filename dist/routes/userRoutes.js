"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _LoginRequired = require('../middlewares/LoginRequired'); var _LoginRequired2 = _interopRequireDefault(_LoginRequired);

const router = new (0, _express.Router)();

router.post('/', _UserController2.default.store);

// Não deveria existir - Segurança
router.get('/', _UserController2.default.index); // Listar usuários?
router.get('/:id', _UserController2.default.show);

// tirando o ":id" dps da barrar - usuário pode editar/apagar só os próprios dados
router.put('/', _LoginRequired2.default, _UserController2.default.update);
router.delete('/', _LoginRequired2.default, _UserController2.default.delete);

exports. default = router;

/* Métodos (Padrão é 5) / Padrões:
  index -> lista todos os usuários (GET)
  store/create -> cria um novo usuário (POST)
  delete -> apaga um usuário (DELETE)
  show -> mostra um usuário (GET)
  update -> atualiza um usuário (PATCH, altera somente um valor
  OU PUT, substitui um objeto inteiro)
*/

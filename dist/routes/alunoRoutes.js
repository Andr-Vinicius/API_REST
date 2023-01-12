"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _AlunoController = require('../controllers/AlunoController'); var _AlunoController2 = _interopRequireDefault(_AlunoController);
var _LoginRequired = require('../middlewares/LoginRequired'); var _LoginRequired2 = _interopRequireDefault(_LoginRequired);

const router = new (0, _express.Router)();

// Rotas abertas
router.get('/', _AlunoController2.default.index);
router.get('/:id', _AlunoController2.default.show);

// Rotas fechadas, somente acesso com login
router.post('/', _LoginRequired2.default, _AlunoController2.default.store);
router.put('/:id', _LoginRequired2.default, _AlunoController2.default.update);
router.delete('/:id', _LoginRequired2.default, _AlunoController2.default.delete);

exports. default = router;

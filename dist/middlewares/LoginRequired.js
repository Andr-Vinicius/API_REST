"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

exports. default = async (req, res, next) => {
  // Pega o Bearer Token do HEADER
  const { authorization } = req.headers;

  // Verifico se existe
  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }

  // Separo o Token do Bearer Token
  const [, token] = authorization.split(' ');

  try {
    // Verifico se o Token é válido, extraio os dados (quem é o usuário)
    const dados = _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    const user = await _User2.default.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário inválido'],
      });
    }

    // Passo pra req, pra poder usar no controller
    req.userId = id;
    req.userEmail = email;

    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Login expirado ou inválido'],
    });
  }
};

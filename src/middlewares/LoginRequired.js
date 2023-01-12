import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
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
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    const user = await User.findOne({
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

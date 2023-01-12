"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

class AlunoController {
  async index(req, res) {
    const alunos = await _Aluno2.default.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [_Foto2.default, 'id', 'DESC']],
      include: {
        model: _Foto2.default,
        attributes: ['url', 'originalname', 'filename'],
      },
    });
    res.json(alunos);
  }

  async store(req, res) {
    try {
      const aluno = await _Aluno2.default.create(req.body);
      console.log(aluno);
      return res.json('Aluno criado com sucesso!');
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      // Pegando o id enviado pela rota
      const { id } = req.params;

      // Verificando se o id não é nulo
      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }

      // Buscando o aluno pelo id
      const aluno = await _Aluno2.default.findByPk(id);
      // Verificando se o aluno existe
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }

      // Atualizando o aluno
      const alunoAtualizado = await aluno.update(req.body);

      const {
        nome, sobrenome, email, idade, peso, altura,
      } = alunoAtualizado;

      // Retornando os dados do aluno
      return res.json({
        nome, sobrenome, email, idade, peso, altura,
      });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async show(req, res) {
    try {
      // Pegando o id enviado pela rota
      const { id } = req.params;

      // Verificando se o id não é nulo
      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }

      // Buscando o aluno pelo id
      const aluno = await _Aluno2.default.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [_Foto2.default, 'id', 'DESC']],
        include: {
          model: _Foto2.default,
          attributes: ['url', 'originalname', 'filename'],
        },
      });
      // Verificando se o aluno existe
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }

      // Retornando os dados do aluno
      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      // Pegando o id enviado pela rota
      const { id } = req.params;

      // Verificando se o id não é nulo
      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }

      // Buscando o aluno pelo id
      const aluno = await _Aluno2.default.findByPk(id);
      // Verificando se o aluno existe
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }

      // Deletando o aluno
      await aluno.destroy();

      // Retornando os dados do aluno
      return res.json('Usuário deletado com sucesso!');
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

exports. default = new AlunoController();

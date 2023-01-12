import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
    // Criando o User em um JSON
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      // Mandando pro Insomnia
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // Index (Listagem geral)
  async index(req, res) {
    try {
      // Mandando atributos no findAll() -> filtrar dados
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });

      // console.log('UserID: ', req.userId);
      // console.log('UserEmail: ', req.userEmail);

      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try { // Pego o id através do Insomnia
      const user = await User.findByPk(req.params.id); // Pk = Primary Key

      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      // Não preciso mais - Validação
      // const { id } = req.params;  Pego o id através do Insomnia

      /* Verificando a existência do id
      if (!req.userId) {
        return res.status(400).json({
          errors: ['ID não enviado...'],
        });
      } */

      const user = await User.findByPk(req.userId); // Pk = Primary Key

      // Verificando a existência do Usuário
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe...'],
        });
      }

      // Salvando os novos dados mandados pelo body
      const novosDados = await user.update(req.body);
      const { id, nome, email } = novosDados;

      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      /* const { id } = req.params;  Pego o id através do Insomnia

      Verificando a existência do id
      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado...'],
        });
      } */

      const user = await User.findByPk(req.userId); // Pk = Primary Key

      // Verificando a existência do Usuário
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe...'],
        });
      }

      // Apagando usuário
      await user.destroy();
      return res.json('Usuário deletado com sucesso!');
    } catch (e) {
      return res.json(null);
    }
  }
}

export default new UserController();

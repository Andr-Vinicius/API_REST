import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    // Chamando init do Pai (Model)
    super.init({
      // Criando o Model, parecido com a Migration, mas sem alguns campos
      nome: {
        type: Sequelize.STRING,
        // Define um valor padrão caso não chegue nada
        defaultValue: '',
        validate: {
          // Objeto com as validações do campo
          // Sequelize usa o validator (Projeto Agenda)
          len: {
            // Tamanho Min e Máx do campo
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 e 255 caracteres!',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existe!',
        },
        validate: {
          isEmail: {
            msg: 'Formato de email inválido!',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        // Não precisa de validação, não será o recebido pelo usuário
        defaultValue: '',
      },
      // Só vai existir aqui, ou seja, não vai pro BD (validação)
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'Senha deve ter entre 6 e 50 caracteres!',
          },
        },
      },
    }, {
      // sequelize -> conexão
      sequelize,
    });
    // Gancho que vai puxar antes de salvar
    this.addHook('beforeSave', async (user) => {
      // Atribuindo a senha já com o hash aplicado pra senha q irá ao BD
      if (user.password) {
        user.password_hash = await bcryptjs.hash(String(user.password), 8);
      }
    });
    // Por ser estático, o return permite o acesso as variáveis
    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}

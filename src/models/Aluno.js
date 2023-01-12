import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    // Chamando init do Pai (Model)
    super.init({
      // Criando o Model, parecido com a Migration, mas sem alguns campos
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 50],
            msg: 'Seu nome deve ter entre 3 e 50 caracteres',
          },
        },
      },

      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Seu sobrenome deve ter entre 3 e 255 caracteres',
          },
        },
      },

      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Esse email já existe!',
        },
        validate: {
          isEmail: {
            msg: 'Formato de email inválido!',
          },
        },
      },

      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Idade inválida!',
          },
          len: {
            msg: 'Idade inválida',
          },
        },
      },

      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um número inteiro ou decimal',
          },
        },
      },

      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Altura precisa ser um número inteiro ou decimal',
          },
        },
      },

    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
}

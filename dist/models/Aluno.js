"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Aluno extends _sequelize.Model {
  static init(sequelize) {
    // Chamando init do Pai (Model)
    super.init({
      // Criando o Model, parecido com a Migration, mas sem alguns campos
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 50],
            msg: 'Seu nome deve ter entre 3 e 50 caracteres',
          },
        },
      },

      sobrenome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Seu sobrenome deve ter entre 3 e 255 caracteres',
          },
        },
      },

      email: {
        type: _sequelize2.default.STRING,
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
        type: _sequelize2.default.INTEGER,
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
        type: _sequelize2.default.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um número inteiro ou decimal',
          },
        },
      },

      altura: {
        type: _sequelize2.default.FLOAT,
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
} exports.default = Aluno;

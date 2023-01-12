"use strict";module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn(
      'alunos', // Tabela
      'email', // Coluna
      { // Campos
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,

      },
    );
  },

  down: () => {},
};

"use strict";module.exports = {
  // Criando uma nova tabela (Users)
  // Campos como id, created e updated normalmente estarão em todas migrações
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    // Email será o login do usuário, por isso o unique
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    // Protegendo a senha do usuário
    password_hash: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('users'),
};

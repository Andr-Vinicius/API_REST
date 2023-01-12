"use strict";const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'John Doe',
          email: 'email1@gmail.com',
          password_hash: await bcryptjs.hash('12345678', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Naruto',
          email: 'email2@gmail.com',
          password_hash: await bcryptjs.hash('654321', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Kang',
          email: 'email3@gmail.com',
          password_hash: await bcryptjs.hash('189778', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],

      {},
    );
  },

  down: () => {},
};

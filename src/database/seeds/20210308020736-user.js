'use strict';

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      {
        tableName: 'users',
        schema: 'scrapbook',
      },
      [
        {
          name: 'João Gabriel',
          email: 'joao@joao.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Duda Menezes',
          email: 'duda@duda.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]
    );
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete(
      { tableName: 'users', schema: 'scrapbook' },
      null,
      {}
    );
  },
};

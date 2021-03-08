'use strict';

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      {
        tableName: 'posts',
        schema: 'scrapbook',
      },
      [
        {
          content: 'post-1',
          user_uid: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          content: 'post-2',
          user_uid: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          content: 'post-1',
          user_uid: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          content: 'post-2',
          user_uid: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]
    );
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete(
      {
        tableName: 'posts',
        schema: 'scrapbook',
      },
      null,
      {}
    );
  },
};

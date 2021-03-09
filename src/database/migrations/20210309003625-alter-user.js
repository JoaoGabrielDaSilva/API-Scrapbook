'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      { tableName: 'users', schema: 'scrapbook' },
      'password_hash',
      {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      }
    );
  },

  down: async queryInterface => {
    await queryInterface.removeColumn('users', 'password_hash');
  },
};

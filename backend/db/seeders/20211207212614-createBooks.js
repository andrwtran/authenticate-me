'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Books', [
        { book_name: 'John Doe', userId: 1 },
        { book_name: 'John Doe', userId: 1 },
        { book_name: 'John Doe', userId: 1 }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Books', null, {});

  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Books', [
        { book_name: 'Book1', userId: 1 },
        { book_name: 'Book2', userId: 1 },
        { book_name: 'Book3', userId: 1 }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Books', null, {});

  }
};

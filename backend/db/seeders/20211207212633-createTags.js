'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Tags', [
        { tag_name: 'John Doe' },
        { tag_name: 'John Doe' },
        { tag_name: 'John Doe' }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Tags', null, {});

  }
};

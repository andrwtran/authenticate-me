'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Tags', [
        { tag_name: 'Tag1' },
        { tag_name: 'Tag2' },
        { tag_name: 'Tag3' },
        { tag_name: 'Tag4' },
        { tag_name: 'Tag5' },
        { tag_name: 'Tag6' }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Tags', null, {});

  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('TaggedNotes', [
        { tagId: 1, noteId: 1 },
        { tagId: 1, noteId: 1 },
        { tagId: 1, noteId: 1 }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('TaggedNotes', null, {});

  }
};

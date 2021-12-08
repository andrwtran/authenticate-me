'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('TaggedNotes', [
        { tagId: 1, noteId: 1 },
        { tagId: 1, noteId: 4 },
        { tagId: 1, noteId: 5 },
        { tagId: 2, noteId: 2 },
        { tagId: 3, noteId: 2 },
        { tagId: 4, noteId: 3 },
        { tagId: 5, noteId: 3 },
        { tagId: 6, noteId: 3 }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('TaggedNotes', null, {});

  }
};

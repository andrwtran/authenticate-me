'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Notes', [
        { note_name: 'John Doe', note_text: '', bookId: 1 },
        { note_name: 'John Doe', note_text: '', bookId: 1 },
        { note_name: 'John Doe', note_text: '', bookId: 1 }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Notes', null, {});

  }
};

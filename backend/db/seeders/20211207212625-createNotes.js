'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Notes', [
        { note_name: 'Note1', note_text: 'Some text', bookId: 1 },
        { note_name: 'Note2', note_text: 'Other text', bookId: 2 },
        { note_name: 'Note3', note_text: 'Some more text', bookId: 2 },
        { note_name: 'Note4', note_text: 'Even more text', bookId: 3 },
        { note_name: 'Note5', note_text: 'One last thing', bookId: 3 },
        { note_name: 'Note6', note_text: 'One more last thing', bookId: 3 }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Notes', null, {});

  }
};

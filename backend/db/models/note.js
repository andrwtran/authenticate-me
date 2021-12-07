'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    note_name: DataTypes.STRING,
    note_text: DataTypes.TEXT,
    bookId: DataTypes.INTEGER
  }, {});
  Note.associate = function(models) {

    const columnMapping = {
      through: 'TaggedNote',
      otherKey: 'tagId',
      foreignKey: 'noteId',
      onDelete: 'CASCADE',
      hooks: true
    };

    Note.belongsToMany(models.Tag, columnMapping);

    Note.belongsTo(models.Book, { foreignKey: 'bookId' });

  };
  return Note;
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  const TaggedNote = sequelize.define('TaggedNote', {
    tagId: DataTypes.INTEGER,
    noteId: DataTypes.INTEGER
  }, {});
  TaggedNote.associate = function(models) {
    // associations can be defined here
  };
  return TaggedNote;
};

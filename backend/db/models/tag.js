'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    tag_name: DataTypes.STRING
  }, {});
  Tag.associate = function(models) {

    const columnMapping = {
      through: 'TaggedNote',
      otherKey: 'noteId',
      foreignKey: 'tagId',
      onDelete: 'CASCADE',
      hooks: true
    };

    Tag.belongsToMany(models.Note, columnMapping);

  };
  return Tag;
};

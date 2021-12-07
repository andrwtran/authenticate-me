'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    book_name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Book.associate = function(models) {
    
    Book.hasMany(models.Note, {
      foreignKey: 'bookId',
      onDelete: 'CASCADE',
      hooks: true
     })

    Book.belongsTo(models.User, { foreignKey: 'userId' });

  };
  return Book;
};

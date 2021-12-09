const express = require('express');
const asyncHandler = require('express-async-handler');
const { Book, Note } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');

const router = express.Router();

// GET ALL BOOKS

router.get('/', requireAuth, asyncHandler(async function(req, res) {
  const { id } = req.user;
  const books = await Book.findAll({
    where: { userId: id },
    order: ['id'],
  });
  return res.json(books);
}));

// ADD A NEW BOOK

router.post('/', requireAuth, asyncHandler(async function(req, res) {
  const { id } = req.user;
  const { book_name } = req.body;

  const book = await Book.create({
    book_name,
    userId: id,
  });

  return res.redirect(`books/${book.id}`)
}));

// EDIT A BOOK

// DELETE A BOOK

// GET NOTES FROM A BOOK

router.get('/:bookId', requireAuth, asyncHandler(async function(req, res) {
  const bookId = parseInt(req.params.bookId, 10);
  const notes = await Note.findAll({
    where: { bookId: bookId },
    order: ['id'],
  });
  return res.json(notes);
}));



module.exports = router;

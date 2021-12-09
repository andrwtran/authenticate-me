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

  return res.json(book);
}));

// EDIT A BOOK

router.put('/:bookId', requireAuth, asyncHandler(async function (req, res) {
  const bookId = parseInt(req.params.bookId, 10);
  await Book.update(req.body, { where: { id: bookId }});
  const book = await Book.findByPk(bookId);

  return res.json(book);
}));

// DELETE A BOOK

router.delete("/:bookId", requireAuth, asyncHandler(async function (req, res) {
  const bookId = parseInt(req.params.bookId, 10);
  const book = await Book.findByPk(bookId);
  await Book.destroy({ where: { id: bookId }})

  return res.json(book);
}));

// GET NOTES FROM A BOOK

router.get('/:bookId', requireAuth, asyncHandler(async function(req, res) {
  const bookId = parseInt(req.params.bookId, 10);
  const notes = await Note.findAll({
    where: { bookId: bookId },
    order: ['id'],
  });
  return res.json(notes);
}));

// **ADD NOTE TO A BOOK**

router.post('/:bookId', requireAuth, asyncHandler(async function(req, res) {
  const bookId = parseInt(req.params.bookId, 10);
  const { note_name, note_text } = req.body;

  const note = await Note.create({
    note_name,
    note_text,
    bookId
  });

  return res.json(note);
}));

// DELETE NOTES FROM A BOOK

// EDIT NOTE IN A BOOK



module.exports = router;

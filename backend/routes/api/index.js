const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const booksRouter = require('./books.js');
const notesRouter = require('./notes.js');
const tagsRouter = require('./tags.js');
const taggedNotesRouter = require('./taggednotes.js');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/books', booksRouter);
router.use('/notes', notesRouter);
router.use('/tags', tagsRouter);
router.use('/taggednotes', taggedNotesRouter);

module.exports = router;

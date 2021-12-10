const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const booksRouter = require('./books.js');
const notesRouter = require('./notes');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/books', booksRouter);
router.use('/notes', notesRouter);

module.exports = router;

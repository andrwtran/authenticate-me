const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const booksRouter = require('./books.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/books', booksRouter);

// router.get('/hello/world', function(req, res) {
//   res.cookie('XSRF-TOKEN', req.csrfToken());
//   res.send('Hello World!');
// });

// router.post('/test', (req, res) => {
//   res.json({ requestBody: req.body });
// });


module.exports = router;

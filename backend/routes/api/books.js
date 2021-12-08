const express = require('express');
const asyncHandler = require('express-async-handler');
const { Book } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async function(_req, res) {
  const books = await Book.findAll({
    where: { userId: 1 },
    order: ['id'],
  });
  return res.json(books);
}));

module.exports = router;

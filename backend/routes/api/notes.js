const express = require('express');
const asyncHandler = require('express-async-handler');
const { Note, Book } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');

const router = express.Router();

// GET ALL NOTES

router.get('/', requireAuth, asyncHandler(async function(req, res) {
  const { id } = req.user;
  const notes = await Note.findAll({
    include: {
      model: Book,
      where: { userId: id },
      order: ['id']
    }
  });
  return res.json(notes);
}));

module.exports = router;

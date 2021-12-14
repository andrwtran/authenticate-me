const express = require('express');
const asyncHandler = require('express-async-handler');
const { TaggedNote } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');

const router = express.Router();

// GET ALL TAGGED NOTES

router.get('/', requireAuth, asyncHandler(async function (req, res) {
  const taggedNotes = await TaggedNote.findAll({attributes: ['id', 'tagId', 'noteId']});
  return res.json(taggedNotes);
}));

// ADD TAG TO A NOTE

router.post('/', requireAuth, asyncHandler(async function (req, res) {
  const { noteId, tagId } = req.body;
  const taggedNote = await TaggedNote.create({ noteId, tagId })
  return res.json(taggedNote);
}));

// REMOVE TAG FROM A NOTE

router.delete("/:taggedNoteId", requireAuth, asyncHandler(async function (req, res) {
  const taggedNoteId = parseInt(req.params.taggedNoteId, 10);
  const taggedNote = await TaggedNote.findByPk(taggedNoteId);
  await TaggedNote.destroy({ where: { id: taggedNoteId }})
  return res.json(taggedNote);
}));

module.exports = router;

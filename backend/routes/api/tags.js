const express = require('express');
const asyncHandler = require('express-async-handler');
const { Tag, Book, Note } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');

const router = express.Router();

// GETS ALL TAGS

router.get('/', requireAuth, asyncHandler(async function (req, res) {
  const { id } = req.user;
  const tags = await Tag.findAll({
    include: [
      { model: Note, include: { model: Book, where: { userId: id } } },
    ],
    order: ['id']
  });
  return res.json(tags);
}))

// ADD A NEW TAG

router.post('/', requireAuth, asyncHandler(async function(req, res) {
  const { tag_name } = req.body;

  const tag = await Tag.create({
    tag_name
  });

  return res.json(tag);
}));

// EDIT A TAG

router.put('/:tagId', requireAuth, asyncHandler(async function (req, res) {
  const tagId = parseInt(req.params.tagId, 10);
  await Tag.update(req.body, { where: { id: tagId }});
  const tag = await Tag.findByPk(tagId);
  return res.json(tag);
}));

// DELETE A TAG

router.delete("/:tagId", requireAuth, asyncHandler(async function (req, res) {
  const tagId = parseInt(req.params.tagId, 10);
  const tag = await Tag.findByPk(tagId);
  await Tag.destroy({ where: { id: tagId }})

  return res.json(tag);
}));


module.exports = router;

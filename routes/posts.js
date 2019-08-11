const router = require('express').Router();
const Post = require('../models/post');

router.get('/', async (req, res) => {
  const posts = await Post.getAllPosts();
  res.send(posts);
});

router.get('/:id', async (req, res) => {
  const post = await Post.getPostById(req.params.id);
  res.send(post);
});

router.post('/edit', async (req, res) => {
  await Post.update(req.body);
  res.end();
});

router.get('/:id/delete', async (req, res) => {
  console.log(req.params.id);
  await Post.delete(req.params.id);
  res.end();
});

module.exports = router;

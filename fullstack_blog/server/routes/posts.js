const express = require('express');
const router = express.Router();

const PostsController = require('../controllers/PostsController');

// Middleware: /api/posts
router.get('/', PostsController.getAllPosts);
router.get('/get', PostsController.getSinglePost);
router.post('/create', PostsController.createPost);

module.exports = router;

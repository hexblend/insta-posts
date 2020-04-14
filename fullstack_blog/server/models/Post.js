const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
	title: {
		type: String,
		min: 1,
		trim: true,
		required: true,
	},
	body: {
		type: String,
		min: 1,
		required: true,
	},
	author: {
		type: String,
		min: 1,
		required: true,
	},
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;

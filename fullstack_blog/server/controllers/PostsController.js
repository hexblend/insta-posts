const getAllPosts = (req, res, next) => {
	res.send('Get all posts');
};

const getSinglePost = (req, res, next) => {
	res.send('Get single post');
};

const createPost = (req, res, next) => {
	res.send('Create post');
};

module.exports = {
	getAllPosts,
	getSinglePost,
	createPost,
};

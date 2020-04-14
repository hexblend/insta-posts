const express = require('express');
const app = express();
require('dotenv').config();

const mongoose = require('mongoose');

// DB Connection
mongoose
	.connect(process.env.DB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('DB Connected'))
	.catch((error) => console.log(error));

// Routes
const postsRoutes = require('./routes/posts');
app.use('/api/posts', postsRoutes);

// 404 Catcher
app.use((req, res, next) => {
	const error = new Error('URL Not Found');
	error.status = 404;
	next(error);
});

// Error Handling
app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.send({ message: `Error! ${error.message}`, error: error });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

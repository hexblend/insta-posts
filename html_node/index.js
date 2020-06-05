const express = require('express');
require('dotenv').config();
const app = express();

// Server Static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

// Dynamic route
app.get('/profile', (req, res) => {
	res.sendFile(__dirname + '/public/dynamic.html');
});

const PORT = process.env.SERVER_PORT || 5000;
app.listen(PORT, () =>
	console.log(`Server running on port ${PORT}`)
);

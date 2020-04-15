import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';

function SinglePostPage(props) {
	const [post, setPost] = useState({});

	const postID = props.match.params.id;

	useEffect(() => {
		axios
			.get(`http://localhost:5000/api/posts/get/${postID}`)
			.then((response) => setPost(response.data.post))
			.catch((error) => console.log(error));
	}, []);
	return (
		<Container>
			<h1>{post.title}</h1>
			<p>{post.body}</p>
			<p>Author: {post.author}</p>
		</Container>
	);
}

export default SinglePostPage;

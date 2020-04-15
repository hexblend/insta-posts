import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SinglePostPage(props) {
	const [post, setPost] = useState({});

	const postID = props.match.params.id;
	useEffect(() => {
		axios
			.get('http://localhost:5000/api/posts/get', {
				id: postID,
			})
			.then((response) => console.log(response))
			.catch((error) => console.log(error));
	}, []);
	return (
		<div>
			<h1>Single Post page</h1>
			<p>{props.params}</p>
		</div>
	);
}

export default SinglePostPage;

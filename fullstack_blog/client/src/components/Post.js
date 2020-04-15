import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

function Post(props) {
	return (
		<Card style={{ maxWidth: '500px' }} className="mx-auto mb-2">
			<Card.Body>
				<Card.Title>{props.post.title}</Card.Title>
				<Card.Text>{props.post.body}</Card.Text>
				<Link to={`/post/${props.post._id}`}>
					<Button variant="primary">See post</Button>
				</Link>
			</Card.Body>
		</Card>
	);
}

export default Post;

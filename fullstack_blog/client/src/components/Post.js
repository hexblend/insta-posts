import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Post(props) {
	return (
		<Card style={{ maxWidth: '500px' }} className="mx-auto mb-2">
			<Card.Body>
				<Card.Title>{props.post.title}</Card.Title>
				<Card.Text>{props.post.body}</Card.Text>
				<Button variant="primary">See post</Button>
			</Card.Body>
		</Card>
	);
}

export default Post;

import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function CreatePost(props) {
	const [formData, setFormData] = React.useState({
		title: '',
		body: '',
		author: '',
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		await axios
			.post('http://localhost:5000/api/posts/create', {
				title: formData.title,
				body: formData.body,
				author: formData.author,
			})
			.then((res) => console.log(res.data.message))
			.catch((err) => console.log(err));
		props.history.push('/');
	};
	return (
		<Container>
			<h1 className="mb-4">Create Post</h1>
			<Form>
				<Form.Group controlId="title">
					<Form.Label>Title</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter post title"
						value={formData.title}
						onChange={(e) =>
							setFormData({ ...formData, title: e.target.value })
						}
					/>
				</Form.Group>
				<Form.Group controlId="body">
					<Form.Label>Post text</Form.Label>
					<Form.Control
						as="textarea"
						rows="3"
						placeholder="Enter post text"
						value={formData.body}
						onChange={(e) =>
							setFormData({ ...formData, body: e.target.value })
						}
					/>
				</Form.Group>
				<Form.Group controlId="name">
					<Form.Label>Author</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter author's name"
						value={formData.author}
						onChange={(e) =>
							setFormData({ ...formData, author: e.target.value })
						}
					/>
				</Form.Group>
				<Form.Group className="text-center">
					<Button
						variant="primary"
						type="submit"
						onClick={handleSubmit}
					>
						Submit
					</Button>
				</Form.Group>
			</Form>
		</Container>
	);
}

export default CreatePost;

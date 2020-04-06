import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
	const getPosts = () => {
		axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then((posts) => setPosts(posts.data))
			.catch((error) => console.log(error));
	};

	const [posts, setPosts] = React.useState([]);

	return (
		<div className="App">
			<h1>Blog posts</h1>
			<button className="getBtn" onClick={() => getPosts()}>
				Get posts
			</button>
			{posts.map((post) => (
				<div className="blogPost" key={post.id}>
					<h3 className="blogTitle">{post.title}</h3>
					<p className="blogBody">{post.body}</p>
				</div>
			))}
		</div>
	);
}

export default App;

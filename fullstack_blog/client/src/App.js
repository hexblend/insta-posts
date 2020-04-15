import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreatePostPage from './pages/CreatePostPage';
import SinglePostPage from './pages/SinglePostPage';
import Navigation from './components/Navigation';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Full Stack Node.js and React.js Blog</p>
			</header>

			<Router>
				<Navigation />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/post/:id" component={SinglePostPage} />
					<Route path="/create" component={CreatePostPage} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;

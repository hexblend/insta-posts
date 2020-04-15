import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function Navigation() {
	return (
		<div className="Navigation mb-4">
			<Navbar bg="light">
				<Nav className="mx-auto">
					<Nav.Item className="mr-5">
						<Link to="/">Home</Link>
					</Nav.Item>
					<Nav.Item>
						<Link to="/create">Create post</Link>
					</Nav.Item>
				</Nav>
			</Navbar>
		</div>
	);
}

export default Navigation;

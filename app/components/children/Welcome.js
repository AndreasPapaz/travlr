import React from 'react';
import { Link } from 'react-router';

export default class Welcome extends React.Component{
	render() {
		return(
			<div>
				<h1>Welcome</h1>
				<Link to='signup'>Sign Up</Link>
				<br />
				<Link to='login'>Login</Link>
				<br />
				<Link to='image'>Image</Link>
			</div>
		);
	}
}
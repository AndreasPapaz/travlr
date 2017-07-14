import React from 'react';
import {Route, BrowserRouter as Router, IndexRoute, Link, Redirect, withRouter } from 'react-router';

import Welcome from './children/Welcome';
import Login from './children/register/Login';
import Signup from './children/register/Signup';

export default class Main extends React.Component{
	render() {
		return(
			<div>
				{this.props.children}
			</div>
		);
	}
}
import React from 'react'
import { Router, Route, IndexRoute, browserHistory, Switch, Redirect } from 'react-router';

import Main from '../components/Main';
import LoginPage from '../components/children/register/LoginPage';
import SignUpPage from '../components/children/register/SignUpPage';
import Dashboard from '../components/Dashboard';
import Bio from '../components/children/dashboard/Bio';
import EntryPage from '../components/children/dashboard/EntryPage';
import Journal from '../components/children/dashboard/Journal';

export default (

	<Router history={browserHistory}>
		<Route path='/' component={Main}>
			<Route path='dashboard' component={Dashboard}>
				<Route path='bio' component={Bio} />
				<Route path='entry' component={EntryPage} />
				<Route path='journal' component={Journal} />
				<IndexRoute component={Bio} />
			</Route>
			<Route path='login' component={LoginPage} />
			<Route path='signup' component={SignUpPage} />
			<IndexRoute component={LoginPage} />
		</Route>
	</Router>

);
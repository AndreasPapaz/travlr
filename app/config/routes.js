import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import AuthContainer from '../components/AuthContainer';
import LandingPage from '../components/LandingPage';
import App2 from '../components/App2';
import Main from '../components/Main';
import LoginPage from '../components/children/register/LoginPage';
import SignUpPage from '../components/children/register/SignUpPage';
import Dashboard from '../components/Dashboard';
import test from '../components/children/dashboard/test';


// export default (

// 	<Router history={browserHistory}>
// 		<Route path='/' component={LandingPage}>
// 			<IndexRoute component={LoginPage} />
// 			<Route path='signup' component={SignUpPage} />
// 			<Route path='login' component={LoginPage} />
// 			<Route path='dashboard' component={Dashboard} />
// 		</Route>
// 		<Route path='/dashboard' component={Dashboard}>
// 			<IndexRoute component={Dashboard} />
// 		</Route>
// 	</Router>

// );

export default (

	<Router history={browserHistory}>
		<Route path='/' component={LandingPage}>
			<Route path='dashboard' component={Dashboard}>
				<Route path='test' component={test} />
				<IndexRoute component={test} />
			</Route>
			<Route path='login' component={LoginPage}>
				<Route path='signup' component={SignUpPage} />
			</Route>
			<Route path='signup' component={SignUpPage} />
			<IndexRoute component={LoginPage} />
		</Route>
	</Router>

);

// export default (

// <Route path='/' component={App2}>
// 	<Route path='login' component={LoginPage} />
// 	<Route path='signup' component={SignUpPage} />

// 	<Route component={AuthContainer}>
// 		<Route path='dashboard' component={dashboard} />
// 		<Route path='test' component={test} />
// 	</Route>
// </Route>

// );
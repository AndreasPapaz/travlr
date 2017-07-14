import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Main from '../components/Main';
import Welcome from '../components/children/Welcome';
import Login from '../components/children/register/Login';
import Signup from '../components/children/register/Signup';


export default (

	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute path='/' component={Welcome}/>
			<Route path='login' component={Login} />
			<Route path='Signup' component={Signup} />
		</Route>
	</Router>

);

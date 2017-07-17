import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Main from '../components/Main';
import Welcome from '../components/children/Welcome';
import Login2 from '../components/children/register/login2';
import Signup from '../components/children/register/Signup';
import ImageTest from '../components/children/register/ImageTest';


export default (

	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Welcome} />
			<Route path='signup' component={Signup} />
			<Route path='login' component={Login2} />
			<Route path='image' component={ImageTest} />
		</Route>
	</Router>

);

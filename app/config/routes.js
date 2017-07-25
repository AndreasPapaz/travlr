import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router';


// var IndexRoute = router.IndexRoute;
import Main from '../components/Main';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Journal from '../components/children/Journal';
import Entries from '../components/children/Entries';
import Profile from '../components/children/Profile';

console.log(Main, Login, Signup, Journal, Entries, Profile)


export default (

	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Login} />
			<Route path='/signup' component={Signup} />
			<Route path='/journal' component={Journal} />
			<Route path='/entries' component={Entries} />
			<Route path='/profile' component={Profile} />
		</Route>
	</Router>

);
import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router';


// var IndexRoute = router.IndexRoute;
import Main from '../components/Main';
import Login from '../components/Login';
import Signup from '../components/Signup';
// import JournalEntry from '../components/children/dashboard/JournalEntry';


export default (

	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Login} />
			<Route path='signup' component={Signup} />
		</Route>
	</Router>

);
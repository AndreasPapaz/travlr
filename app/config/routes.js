// var React = require('react');
// var router = require('react-router');
// var Route = router.Route;
// var Router = router.Router;
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// var hashHistory = router.hashHistory;

// var IndexRoute = router.IndexRoute;
import Main from '../components/Main';


// module.exports = (
// 	<Router history = {hashHistory}> <----- what is hashhistory????
// 		<Route path='/' component={Journal}>

// 		</Route>
// 	</Router>

module.exports = (

	<Router>
	    <div>

	    <Route exact path="/" component={Main}/>

	    </div>
  </Router>

);
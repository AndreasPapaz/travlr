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
var Journal = require('../components/Journal');


// module.exports = (
// 	<Router history = {hashHistory}> <----- what is hashhistory????
// 		<Route path='/' component={Journal}>

// 		</Route>
// 	</Router>

module.exports = (

	<Router>
	    <div>

	    <Route exact path="/" component={Journal}/>
      	<Route path="about" component={Journal}/>

	    </div>
  </Router>

);
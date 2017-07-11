var React = require('react');
var router = require('react-router');
var Route = router.Route;
var Router = router.Router;

var hashHistory = router.hashHistory;

var IndexRoute = router.Index.Route;

var Journal = require('../components/Journal');


module.exports = (
	<Router history = {hashHistory}>
		<Route path='/' component={Journal}>

		</Route>
	</Router>
);
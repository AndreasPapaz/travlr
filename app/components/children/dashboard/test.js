import React, {Component} from 'react';
import { Image } from 'semantic-ui-react';
import axios from 'axios';

export default class test extends Component {
	componentWillMount() {
		console.log("this is the dashboard");
		// axios.get('/verify').then(function(res) {
		// 	console.log(res);
		// });
	}
	render() {
	return(
	    <div>
	    	<h1> dash test</h1>
	    </div>
	);
	}
}

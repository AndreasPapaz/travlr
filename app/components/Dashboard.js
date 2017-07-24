import React, {Component} from 'react';
import { Image } from 'semantic-ui-react';
import axios from 'axios';
import { Button, Checkbox, Form, Grid, Menu, Segment } from 'semantic-ui-react'
import { Link, browserHistory } from 'react-router';

export default class Dashboard extends Component {

	handleItemClick(e, { name }) {
		// this.setState({ activeItem: name })
		console.log("clicking on new state");
		console.log(e);
		console.log(name);
		browserHistory.push(name);
	}

	componentWillMount() {

		var userId = localStorage.getItem('userId');
		console.log('USERID : ', userId);

		this.state = { activeItem: 'bio'}

		this.checkId(userId);
		this.initializeState();
		// console.log("this is the dashboard");
		// axios.get('/jimmyjohns').then(function(res) {
		// 	console.log(res);
		// });
		this.signOut = this.signOut.bind(this);
	}

	initializeState() {
		this.setState({
			name: ''
		})
	}

	signOut() {
		console.log("sign out button");

		// window.localStorage.setItem('userId', null);
		localStorage.clear();
		this.context.router.push('/');
	}

	checkId(userId) {
		if (userId) {
			console.log("winner winner");
			console.log(userId);
			axios.post('/getUser', {'userId': userId}).then(res => {
				console.log(res.data.name);

				this.setState({
					name: res.data.name
				});
				if (!res) {
					console.log("no user");
					this.context.router.push('/signup');
				}
			})
		} else if (userId == null) {
			console.log("no user");
			this.context.router.push('/signup');
		}
	}

	render() {
		const { activeItem } = this.state
	return(
	    <div>
	    	<Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item name='bio' active={activeItem === 'bio'} onClick={this.handleItemClick} />
            <Menu.Item name='pics' active={activeItem === 'pics'} onClick={this.handleItemClick} />
            <Menu.Item name='companies' active={activeItem === 'companies'} onClick={this.handleItemClick} />
            <Menu.Item name='links' active={activeItem === 'links'} onClick={this.handleItemClick} />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            {this.props.children}
          </Segment>
        </Grid.Column>
      </Grid>
	    	<Button onClick={this.signOut}>Log Out</Button>
	    </div>
	);
	}
}

Dashboard.contextTypes = {
  router: React.PropTypes.any
};

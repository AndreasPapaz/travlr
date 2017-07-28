import React, {Component, PropTypes } from 'react';
import { Image } from 'semantic-ui-react';
import axios from 'axios';
import { Button, Checkbox, Form, Grid, Menu, Segment } from 'semantic-ui-react'
import { Link, browserHistory } from 'react-router';

export default class Dashboard extends Component {

	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		activeItem: ''
	// 	};
	// }

	handleItemClick(e, {name}) {
		browserHistory.push('/dashboard/' + name);
	}

	componentWillMount() {

		this.state = { activeItem: ''};

		var userId = localStorage.getItem('userId');
		console.log('USERID : ', userId);
		this.checkId(userId);
		this.signOut = this.signOut.bind(this);
	}

	initializeState() {
		this.setState({
			name: '',
			img: '',
			birthday: '',
			email: ''
		})
	}

	signOut(e) {
		e.preventDefault();
		localStorage.clear();
		this.context.router.push('/');
	}

	checkId(userId) {
		if (userId) {
			var userId = localStorage.getItem('userId');

			axios.post('/getUser', {'userId': userId}).then(res => {
				this.setState({
					name: res.data.name,
					img: res.data.img,
					birthday: res.data.birthday,
					email: res.data.email
				});
				if (!res) {
					this.context.router.push('/signup');
				}
			})
		} else if (userId == null) {
			this.context.router.push('/signup');
		}
	}

	render() {

		const { activeItem } = this.state

		const childrenWithProps = React.Children.map(this.props.children, child => {
			return React.cloneElement(child, {
				name: this.state.name,
				img: this.state.img,
				birthday: this.state.birthday,
				email: this.state.email
			});
		});


	return(
		<div>
		 <Menu stackable>
        <Menu.Item className="title">
          travlr
        </Menu.Item>

        <Menu.Item
          name='bio'
          active={activeItem === 'bio'}
          onClick={this.handleItemClick}
        >
          Bio
        </Menu.Item>

        <Menu.Item
          name='entry'
          active={activeItem === 'entry'}
          onClick={this.handleItemClick}
        >
          Entry
        </Menu.Item>

        <Menu.Item
          name='journal'
          active={activeItem === 'journal'}
          onClick={this.handleItemClick}
        >
          Journal
        </Menu.Item>

        <Menu.Item
          name='logout'
          active={activeItem === 'logout'}
          onClick={this.signOut}
        >
          Logout
        </Menu.Item>
      </Menu>
		<Grid>
		<Grid.Column stretched width={3}></Grid.Column>

		<Grid.Column stretched width={10}>

				{childrenWithProps}

		</Grid.Column>
		</Grid>
		</div>
	);
	}
}

Dashboard.contextTypes = {
  router: React.PropTypes.any
};

Dashboard.PropTypes = {
    children: PropTypes.object.isRequired
};

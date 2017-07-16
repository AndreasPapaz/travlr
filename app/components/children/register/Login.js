import React from 'react';
import { Link } from 'react-router';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';

// (might need a loging component);

export default class Login extends React.Component{
	getInitialState() {
		return {
			email: '',
			password: ''
		};
	}
	handleEmailChange(event) {
		this.setState({
			email: event.target.value
		});
	}
	handlePasswordChange(event) {
		this.setState({
			password: event.tartget.value
		})
	}
	handleRegisterSubmit(event) {
		event.preventDefault();

		var profile = {
			email: this.state.email,
			password: this.state.password
		}
	}
	render() {
		return(
			<div>
				<h3>LOGIN</h3>
			<Form>
				<Form.Field>
					<label>Email</label>
						<input placeholder='email' name="email" type="email" value={this.state.email} onChange={this.handleEmailChange} required />
					</Form.Field>
					<Form.Field>
						<label>Password</label>
					<input placeholder='password' name="password" type="password" value={this.state.password} onChange={this.handlePasswordChange} required />
				</Form.Field>
				<Button type='submit'>{this.state.message}</Button>
			</Form>
			</div>
		);
	}
}
import React from 'react';
import { Link } from 'react-router';
import { Button, Checkbox, Form } from 'semantic-ui-react';

export default class Signup extends React.Component{
	render() {
		return(
			<div>
				<h3>Sign Up</h3>
			<Form className={this.props.className} onSubmit={this.onSubmit} action=''>
				<Form.Field>
					<label>Email</label>
						<input placeholder='Email' />
					</Form.Field>
					<Form.Field>
						<label>Password</label>
					<input placeholder='Password' />
				</Form.Field>
				<Button type='submit'>Submit</Button>
			</Form>
			</div>
		);
	}
}
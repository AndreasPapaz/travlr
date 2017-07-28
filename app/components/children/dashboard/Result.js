import React, { PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { Card, Flag, Segment, Grid, Image, Divider, Button } from 'semantic-ui-react';
import axios from 'axios';


class Result extends React.Component {

	constructor(props) {
		super(props);
		this.handler = this.handler.bind(this);
	}

	handler(e) {
		e.preventDefault()

	}

	componentWillMount() {
		this.state = {
			geoCode: this.props.geoCode
		}
	}

	handleDelete() {

		var destroy = {
			id: this.id
		};

		axios.post('/delete', destroy).then(function(res) {
			// this.context.router.replaceWith('/entry');
		});
	}

	render() {
		return(
			<Segment padded>
				<Grid>
				<Grid.Column width={5}>
				<Image src={this.props.img} />
				</Grid.Column>
				<Grid.Column width={8}>
				<h1>{this.props.title}</h1>
				<Divider horizontal></Divider>
				{this.props.body}
				</Grid.Column>
				<Grid.Column width={3}>
				<Flag name={this.props.geoCode} />
				<h6>{this.props.location}</h6>
					<Button id={this.props.id} onClick={this.props.delete} >Delete</Button>
				</Grid.Column>
				</Grid>
			</Segment>
		)
	}
}

Result.contextTypes = {
	router: PropTypes.object.isRequired
};

export default Result;

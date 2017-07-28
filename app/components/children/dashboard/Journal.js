import React, { PropTypes } from 'react'
import { browserHistory, Router } from 'react-router';
import { Card, Flag, Segment, Grid } from 'semantic-ui-react';
import Result from './Result';
import axios from 'axios';

class Journal extends React.Component {

	constructor(props) {
		super(props);
		this.state ={
			journal: [],
			message: ''
		}
	}

	delete() {

		console.log('click new new');
	}

	componentWillMount() {
		var userId = localStorage.getItem('userId');

		axios.post('/journal', {'userId': userId}).then(res => {
			if(res.data.length > 0) {
				const uploadedJournal = res.data;

				let updatedPosts = Object.assign([], this.state.journal);
				updatedPosts.push(uploadedJournal);

				this.setState({
					journal: uploadedJournal
				});

			} else {
				this.context.router.push('/dashboard/entry');
			}
		});
	}

	render() {

		return(
			<div className="result-holder">
				<h3 className="innerTitle">Your Journal</h3>
				{this.state.journal.map(function(entry, i) {
					return (

						<Result key={i} delete={this.delete} id={entry.id} url={entry.url} title={entry.title} location={entry.location} body={entry.body} img={entry.img} geoCode={entry.geoCode} date={entry.date} />
					);
				})}
			</div>
		)
	}
}

Journal.contextTypes = {
	router: PropTypes.object.isRequired
};

export default Journal;
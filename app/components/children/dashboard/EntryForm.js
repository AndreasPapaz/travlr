import React, { PropTypes } from 'react';
import { Button, Checkbox, Form, Icon, Card} from 'semantic-ui-react';
import { Link } from 'react-router';
import axios from 'axios';
import Dropzone from 'react-dropzone'
import superagent from 'superagent'
import sha1 from 'sha1'

const EntryForm = ({
	onSubmit,
	onDrop,
	onChange,
	entry,
}) => (

	<Form className='' action='/' onSubmit={onSubmit}>
		<Form.Field>
			<label>Title</label>
			<input
			name='title'
			onChange={onChange}
			value={entry.title}
			placeholder='what did you do today!' />
		</Form.Field>

		<Form.Field>
			<label>Where did you visit?</label>
			<input
			name='location'
			onChange={onChange}
			value={entry.location}
			placeholder='i.e.) Santorini, Greece' />
		</Form.Field>

		<Form.TextArea
		label='tell me about your trip'
		name='body'
		onChange={onChange}
		value={entry.body}
		/>

		 <Button type='submit' primary>Post</Button>

	</Form>
);


EntryForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	entry: PropTypes.object.isRequired
};

export default EntryForm;
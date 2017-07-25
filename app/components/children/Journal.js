import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, Checkbox, Form, Icon } from 'semantic-ui-react';
import { Link } from 'react-router';
import DropzoneComponent from 'react-dropzone-component';

export default class Journal extends Component {

constructor(props) {
	super(props); 

	this.djsConfig = {
            addRemoveLinks: true,
            acceptedFiles: "image/jpeg,image/png,image/gif",
            autoProcessQueue: false
        };

	this.componentConfig = {
		iconFiletypes: ['.jpg', '.png', '.gif'],
    	showFiletypeIcon: true,
    	postUrl: 'no-url'
	};

	this.callback = () => console.log('Hello!');

	this.success = file => console.log('uploaded', file);

	this.addedfile = file => console.log('addedfile', file);

	this.removedfile = file => console.log('removing...', file);

	this.dropzone = null;
}

handleFileAdded(file) {
	console.log("upload file : " + file);
}

render() {

	const config = this.componentConfig;
	const djsConfig = this.djsConfig; 

	const eventHandlers = {
		init: dz => this.dropzone = dz, 
		drop: this.callbackArray,
		addedfile: this.handleFileAdded.bind(this),
		success: this.success, 
		removedfile: this.removedfile
	}

	return(
	    <Form>
	    <Form.Field>
	    	<label>Title</label>
	    	<input placeholder='Title' />
	    </Form.Field>
	    <Form.Field>
	    	<label>Location</label>
	      	<input placeholder='Location' />
	    </Form.Field>
		<Form.TextArea label='Entry' placeholder='This is what I did today...' />

		<DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} />

	   	 <Link to='profile'>
            <Button className='profile'>
              <Button.Content visible>
                Submit
              </Button.Content>
            </Button>
          </Link>  

		</Form>
	);
}
}


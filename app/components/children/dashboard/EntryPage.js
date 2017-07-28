import React, { PropTypes } from 'react';
import { browserHistory, Router } from 'react-router';
import { Image, Segment, Button } from 'semantic-ui-react'
import EntryForm from './EntryForm';
import axios from 'axios';
import Dropzone from 'react-dropzone'
import superagent from 'superagent'
import sha1 from 'sha1'


import helpers from '../../utils/helpers';


class EntryPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			errors: {},
			entry: {
				img: '',
				user: '',
				title: '',
				body: '',
				location: undefined,
				geoCode: ''
			}
		};
		this.processForm = this.processForm.bind(this);
		this.changeEntry = this.changeEntry.bind(this);
	}

	componentWillMount() {
		var userId = localStorage.getItem('userId');
	}

	componentDidUpdate(prevProps, prevState) {
		if(prevState.entry.location !== this.state.entry.location) {

			const entry = {
				img: this.state.entry.img,
				user: this.state.entry.user,
				title: this.state.entry.title,
				body: this.state.entry.body,
				location: this.state.entry.location,
				geoCode: this.state.entry.geoCode
			}

			axios.post('/journalentry', entry).then(function(res) {

			});
			this.context.router.push('/dashboard/journal')
		}
	}

	uploadFile(files) {

        const image = files[0];
        const cloudName = 'apapaz2';
        const url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/image/upload';
        const timeStamp = Date.now()/1000;
        const uploadPreset = 'ompz56x9';
        const paramStr = 'timestamp='+timeStamp+'&upload_preset='+uploadPreset+'_SH9vE5EDmGY-gyRZSIYvK_9OBM';

        const signature = sha1(paramStr);
        const params = {
          'api_key' : '339474989417363',
          'timestamp' : timeStamp,
          'upload_preset' : uploadPreset,
          'signature' : signature
        }

        let uploadRequest = superagent.post(url);
        uploadRequest.attach('file', image);

        Object.keys(params).forEach((key) => {
          uploadRequest.field(key, params[key])
        });

        uploadRequest.end((err, res) => {
          if (err){
            alert(err);
            return;
          }
          console.log('Upload Complete ' + JSON.stringify(res.body));
          console.log("this is the link you are looking for : " + res.body.secure_url);
          const uploaded = res.body.secure_url;

          this.setState({
            entry: {
              img: uploaded
            }
          });
        });
    }

	processForm(event) {
		event.preventDefault();

		console.log('this is the location . ', location);

		helpers.runQuery(this.state.entry.location).then(function(data) {
			var userId = localStorage.getItem('userId');
			this.setState({
				entry: {
					img: this.state.entry.img,
					user: userId,
					title: this.state.entry.title,
					body: this.state.entry.body,
					location: data.country,
					geoCode: data.country_code
				}
			});
		}.bind(this));

	}

	changeEntry(event) {
		const field = event.target.name;
		const entry = this.state.entry;
		entry[field] = event.target.value;
			console.log(field);
		this.setState({
			entry
		});
	}

	render() {
		return(
			<Segment>
				<Dropzone multiple={false} style={{margin: 0}} onDrop={this.uploadFile.bind(this)} >
				<Button primary>ADD PHOTO</Button>
				</Dropzone>
				<Image className="entryPhoto" src={this.state.entry.img} size='medium' />
				<EntryForm
				onSubmit={this.processForm}
				onChange={this.changeEntry}
				entry={this.state.entry}
				/>
			</Segment>
		);
	}

}

EntryPage.contextTypes = {
  router: React.PropTypes.any
};


EntryPage.PropTypes = {
    children: PropTypes.object.isRequired
};

export default EntryPage;

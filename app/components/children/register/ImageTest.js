import React,{ Component } from 'react'
import Dropzone from 'react-dropzone'
import superagent from 'superagent'
import sha1 from 'sha1'
import axios from 'axios'

class ImageTest extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			images: []
		}
	}

	uploadFile(files) {

		console.log("upload file: " + files[0]);

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
			const uploaded = res.body;

			let updatedImages = Object.assign([], this.state.images);
			updatedImages.push(uploaded);

			this.setState({
				images: updatedImages
			});
		});
	}

	render() {

		const list = this.state.images.map((image, i) => {
			return (
				<li key={i}>
					<img src={image.secure_url} />
				</li>
			)
		})

		return(
			<div>
				<Dropzone onDrop={this.uploadFile.bind(this)} />
					<ul>
						{ list }
					</ul>
			</div>
		)
	}
}

export default ImageTest
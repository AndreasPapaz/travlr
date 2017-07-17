import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import AvatarCropper from 'react-avatar-cropper';

class FileUpload extends React.Component {
	handleFile(e) {
		var reader = new FileReader();
		var file = e.target.files[0];
		console.log(reader);
		console.log(file);

		if(!file) return;

		reader.onload = function(img) {
			ReactDOM.findDOMNode(this.refs.in).value = '';
			this.props.handleFileChange(img.target.result);
			}.bind(this);
		reader.readAsDataURL(file);
	}

	render() {
		return (
      <input ref="in" type="file" accept="image/*" onChange={this.handleFile} />
    );
	}
}

import React,{ Component } from 'react'
import AvatarCropper from 'react-avatar-cropper';

import FileUpload from './FileUpload';

class ImageTest extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			cropperOpen: false,
			img: null,
			croppedImg: "http://www.fillmurray.com/400/400"
		}
	}

	handleFileChange() {
		this.setState({
			img: dataURI,
			croppedImg: this.state.croppedImg,
			cropperOpen: true
		});
	}

	handleCrop() {
		this.setState({
			cropperOpen: false,
			img: null,
			croppedImg: dataURI
		});
	}

	handleRequestHide() {
		this.setState({
			cropperOpen: false
		});
	}

	render () {
	return (
	  <div>
	    <div className="avatar-photo">
	      <FileUpload handleFileChange={this.handleFileChange} />
	      <div className="avatar-edit">
	        <span>Click to Pick Avatar</span>
	        <i className="fa fa-camera"></i>
	      </div>
	      <img src={this.state.croppedImg} />
	    </div>
	    {this.state.cropperOpen &&
	      <AvatarCropper
	        onRequestHide={this.handleRequestHide}
	        cropperOpen={this.state.cropperOpen}
	        onCrop={this.handleCrop}
	        image={this.state.img}
	        width={400}
	        height={400}
	      />
	    }
	  </div>
	);
	}
}


export default ImageTest;

export default FileUpload;
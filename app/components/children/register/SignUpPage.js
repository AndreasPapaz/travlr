import React, { PropTypes } from 'react';
import { browserHistory, Router } from 'react-router';
import { Image, Segment, Button } from 'semantic-ui-react'
import SignUpForm from './SignUPForm';
import axios from 'axios';
import Dropzone from 'react-dropzone'
import superagent from 'superagent'
import sha1 from 'sha1'




class SignUpPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			errors: {},
			user: {
				email: '',
        birthday: '',
				name: '',
				password: '',
        img: ''
			}
		};
		this.processForm = this.processForm.bind(this);
		this.changeUser = this.changeUser.bind(this);
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
          const uploaded = res.body.secure_url;

          // let updatedImages = Object.assign([], this.state.images);
          // updatedImages.push(uploaded);

          this.setState({
            user: {
              img: uploaded
            }
          });
        });
    }

 	processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    const cred = {
    email: this.state.user.email,
    birthday: this.state.user.birthday,
    name: this.state.user.name,
    password: this.state.user.password,
    img: this.state.user.img
    };

    console.log("this is your cred : ", cred);
    axios.post('/signup', cred).then(function(res) {
      console.log("you are hitting the signup route");
    	console.log(res.data._id);
        window.localStorage.setItem('userId', res.data._id);
    	this.context.router.push('/');
    }.bind(this)).catch(function(err) {
        console.log(err);
    });
  }

 	changeUser(event) {
 		const field = event.target.name;
 		const user = this.state.user;
 		user[field] = event.target.value;
        console.log(field);
 		this.setState({
 			user
 		});
 	}

 	render() {

 		return (
      <div>
      <h1 className="homeTitle">travlr</h1>
      <div className='login-form'>


        <div className="signupPhoto">
          <Dropzone style={{margin: 0}} onDrop={this.uploadFile.bind(this)} >
            <Button primary>ADD PHOTO</Button>
          </Dropzone>
          <Image className="entryPhoto" src={this.state.user.img} size='small' />
        </div>


        <SignUpForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        user={this.state.user}
        />
      </div>
      </div>
 		);
 	}
}

// SignUpPage.contextTypes = {
// 	router: React.PropTypes.any
// };

SignUpPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default SignUpPage;
import React, { PropTypes } from 'react';
import { browserHistory, Router } from 'react-router';
import LoginForm from './LoginForm';
import axios from 'axios';


class LoginPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        email: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  componentWillMount() {

    var userId = localStorage.getItem('userId');
    console.log('USERID fomr login : ', userId);

    if(userId) {
      console.log("user is not null");
      this.context.router.push('/dashboard');
    }

  }

  processForm(event) {
    event.preventDefault();

    const cred = {
      email: this.state.user.email,
      password: this.state.user.password
    }

    axios.post('/login', cred).then(function(res) {
      console.log(res.data);
      window.localStorage.setItem('userId', res.data._id);
      this.context.router.push('/dashboard');
    }.bind(this)).catch(function(err) {
      console.log('login err : ' + err);
    });

    // create an AJAX request
    // const xhr = new XMLHttpRequest();
    // xhr.open('post', '/auth/login');
    // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // xhr.responseType = 'json';
    // xhr.addEventListener('load', () => {
    //   if (xhr.status === 200) {
    //     // success

    //     // change the component-container state
    //     this.setState({
    //       errors: {}
    //     });

    //     // save the token
    //     Auth.authenticateUser(xhr.response.token);


    //     // change the current URL to /
    //     this.context.router.replace('/');
    //   } else {
    //     // failure

    //     // change the component state
    //     const errors = xhr.response.errors ? xhr.response.errors : {};
    //     errors.summary = xhr.response.message;

    //     this.setState({
    //       errors
    //     });
    //   }
    // });
    // xhr.send(formData);
  }

  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  render() {
    return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}


LoginPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default LoginPage;
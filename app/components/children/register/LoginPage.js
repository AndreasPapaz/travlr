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
    console.log(userId === undefined);

    if(userId !== undefined && userId !== null) {
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
    console.log(cred);
    axios.post('/login', cred).then(function(res) {
      // console.log(res.data);
      window.localStorage.setItem('userId', res.data._id);
      this.context.router.push('/dashboard');
    }.bind(this)).catch(function(err) {
      console.log('login err : ' + err);
    });
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
      <div>
      <h1 className="homeTitle">travlr</h1>
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
      </div>
    );
  }

}


LoginPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default LoginPage;
import React, {Component} from 'react';
import Login from './Login';
// import GetService from './utils/getService';

// let verifyService = new GetService('/api/verify/');

export default class Main extends Component {
  getInitialState() {
    return {}
  }
  // componentWillMount() {
  //   verifyService.getRoute().then(function(res) {
  //     this.setState({
  //       auth: res.auth;
  //       googleId: res.googleId
  //     });
  //   }.bind(this));
  // }
  render() {
    return(
      <div className='ui container'>
        <Login />
      </div>
    );
  }
}
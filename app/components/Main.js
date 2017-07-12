import React, {Component} from 'react';

export default class Main extends Component {

  render() {
    return(
      <div className="loginSignup">
        <div className="row">
          <div className="col-xs-12">
            <img src={'/assets/images/earth.png'} className="travlr-logo center-block"/>
            <a type='button' className='btn btn-white btn-outline btn-lg btn-rounded login-button'
              href='/auth/google'>
              <h3>Sign up/in with Google</h3>
            </a>

            <h4>Travlr App</h4>
          </div>
        </div>
      </div>
    );
  }
}
import React, {Component} from 'react';
import { Button, Checkbox, Form, Icon } from 'semantic-ui-react';
import { Link } from 'react-router';

export default class Login extends Component {

  render() {
    return(
        <Form className='login-form'>
          <Form.Field>
            <label>Email</label>
            <input placeholder='Email' />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder='Password' />
          </Form.Field>
          <Button type='submit'>Submit</Button>


          <Link to='signup'>
            <Button className='sign-up_btn' animated='fade'>
              <Button.Content visible>
                Sign-Up
              </Button.Content>
              <Button.Content hidden>
                The adventure begins here!
              </Button.Content>
            </Button>
          </Link>



        </Form>
    );
  }
}
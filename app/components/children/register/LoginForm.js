import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button, Checkbox, Form } from 'semantic-ui-react'


const LoginForm = ({
  onSubmit,
  onChange,
  user
}) => (
  <Form className='login-form' onSubmit={onSubmit}>

    <Form.Field>
      <lable>Email</lable>
      <input
        name="email"
        onChange={onChange}
        value={user.email}
      />
    </Form.Field>

    <Form.Field>
      <lable>Password</lable>
      <input
        type="password"
        name="password"
        onChange={onChange}
        value={user.password}
      />
    </Form.Field>

    <Button type='submit' primary>Login</Button>

    <Link to='/signup'>
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

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button, Checkbox, Form } from 'semantic-ui-react'


const SignUpForm = ({
  onSubmit,
  onChange,
  user,
}) => (
  <Form className='login-form' action='/' onSubmit={onSubmit}>
    <Form.Field>
      <lable>Name</lable>
      <input
        name="name"
        onChange={onChange}
        value={user.name}
      />
    </Form.Field>

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

    <Button type='submit' primary>Sign up</Button>

    <Link to='/login'>
      <Button className='sign-up_btn' animated='fade'>
        <Button.Content visible>
          Login
        </Button.Content>
      </Button>
    </Link>
  </Form>
);


SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;
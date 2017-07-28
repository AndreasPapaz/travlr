import React, { PropTypes } from 'react';
import { Button, Checkbox, Form, Icon, Card} from 'semantic-ui-react';
import { Link } from 'react-router';


const SignUpForm = ({
  onSubmit,
  onChange,
  user,
}) => (
    <Form class='login-form' action='/' onSubmit={onSubmit}>

      <Form.Field>
        <label>First Name</label>
        <input
        name='name'
        onChange={onChange}
        value={user.name}
        placeholder='First Name' />
      </Form.Field>

      <Form.Field>
        <label>Birthdate</label>
        <input
        name='birthday'
        type='date'
        onChange={onChange}
        value={user.birthday}
        placeholder='Birth-Date' />
      </Form.Field>

      <Form.Field>
        <label>Email</label>
        <input
        name='email'
        onChange={onChange}
        value={user.email}
        placeholder='Email'/>
      </Form.Field>

      <Form.Field>
        <label>Password</label>
        <input
        type="password"
        name="password"
        onChange={onChange}
        value={user.password}
        placeholder='Password' />
      </Form.Field>

      <Button type='submit' primary>Sign up</Button>

    </Form>
);


SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;


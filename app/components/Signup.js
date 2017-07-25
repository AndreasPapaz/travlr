import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, Checkbox, Form, Icon } from 'semantic-ui-react';
import { Link } from 'react-router';
import axios from 'axios';
import Login from './Login';

export default class Signup extends Component {
  constructor(props){
    super(props);
    this.state={
      first_name:'',
      last_name:'',
      birthdate:'',
      email:'',
      password:''
    }
  }
handleClick(event){
    var apiBaseUrl = "http://localhost:3000/api/";
    console.log("values",this.state.first_name,this.state.last_name,this.state.email,this.state.password);
    //To be done:check for empty values before hitting submit
    var self = this;
    var payload={
    "first_name": this.state.first_name,
    "last_name":this.state.last_name,
    "birthdate":this.state.birthdate,
    "email":this.state.email,
    "password":this.state.password
    }
    axios.post(apiBaseUrl+'/signup', payload)
   .then(function (response) {
     console.log(response);
     if(response.data.code == 200){
      //  console.log("registration successfull");
       var loginscreen=[];
       loginscreen.push(<Login parentContext={this}/>);
       var loginmessage = "Not Registered yet.Go to registration";
       self.props.parentContext.setState({loginscreen:loginscreen,
       loginmessage:loginmessage,
       buttonLabel:"Register",
       isLogin:true
        });
     }
   })
   .catch(function (error) {
     console.log(error);
   });
  }
   render() {
    return(
        <Form className='submit-form'>
          
          <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' />
          </Form.Field>
          
          <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' />
          </Form.Field>
          <Form.Field>
            <label>Birthdate</label>
            <input placeholder='Birthdate' />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input placeholder='Email'/>
          </Form.Field>
          
          <Form.Field>
            <label>Password</label>
            <input placeholder='Password' />
          </Form.Field>
          <Form.Field>
            <Checkbox label='Legal stuff no one reads' />
          </Form.Field>
          <Link to='journal'>
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
const style = {
  margin: 15,
};




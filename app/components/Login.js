import React, {Component} from 'react';
import { Button, Checkbox, Form, Icon } from 'semantic-ui-react';
import { Link } from 'react-router';

export default class Login extends Component {
  
  constructor(props){
    super(props);
    this.state={
    username:'',
    password:''
    }
   }

  handleClick(event){
   var apiBaseUrl = "http://localhost:4000/api/";
   var axios = require("axios");
   var self = this;
   var payload={
   "email":this.state.username,
   "password":this.state.password
   }
   axios.post(apiBaseUrl+'login', payload)
   .then(function (response) {
   console.log(response);
   if(response.data.code == 200){
   console.log("Login successfull");
   // var uploadScreen=[];
   // uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
   // self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
   }
   else if(response.data.code == 204){
   console.log("Username password do not match");
   alert("username password do not match")
   }
   else{
   console.log("Username does not exists");
   alert("Username does not exist");
   }
   })
   .catch(function (error) {
   console.log(error);
   });
   }
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

            <Link to='journal'>
              <Button>Submit</Button>
            </Link>

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
  const style = {
   margin: 15,
  };
  
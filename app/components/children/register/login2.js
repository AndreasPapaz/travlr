import React from "react";
import axios from 'axios';
// import ImagesUploader from 'react-images-uploader';
// https://medium.com/ecmastack/uploading-files-with-react-js-and-node-js-e7e6b707f4ef
// CLOUDINARY
// https://scotch.io/tutorials/leveraging-react-for-easy-image-management-with-cloudinary

class Login2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("CLICK");
    console.log(this.state.email);
    console.log(this.state.password);
    // this.props.setTerm(this.state.email);
    // this.props.setTerm(this.state.password);
    // this.setState({ email: "" });
    // this.setState({ password: "" });
    var cred = {
      email: this.state.email,
      password: this.state.password
    };

//look up the axios route for this function and test data base, after add photos
    axios.post('/register', cred).then(function(res) {
      if (res.data === 'User already exisits') {
        this.setState({
          error: 'the user exits, please try again'
        })
      } else {
        sessionStorage.setItem('do_good_id', res.data);
        // this.context.router.push('main'); this may be the router to next page
      }
    }.bind(this))
  }

  render() {

    return (

      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Profile</h3>
        </div>
        <div className="panel-body text-center">

          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4 className="">
                <strong>E-Mail</strong>
              </h4>

              {/*
                Note how each of the form elements has an id that matches the state.
                This is not necessary but it is convenient.
                Also note how each has an onChange event associated with our handleChange event.
              */}
              <input
                type="text"
                className="form-control text-center"
                id="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              <br />

              <h4 classname="">
                <strong>Password</strong>
              </h4>

              <input
                type="text"
                className="form-control text-center"
                id="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />

              <br />
              <br />

              <button
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>

            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login2;
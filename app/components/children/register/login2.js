import React from "react";

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
    this.props.setTerm(this.state.email);
    this.props.setTerm(this.state.password);
    this.setState({ email: "" });
    this.setState({ password: "" });
  }

  render() {

    return (

      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Query</h3>
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
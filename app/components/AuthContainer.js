import React, { Component } from 'react';
import { connect } from 'react-redux';


class AuthContainer extends React.Component {
	componentDidMount() {
		const { dispatch, curentURL } = this.this.props

		if(!isLoggedIn) {
			dispatch(setRedirectUrl(currentURL))
			browswerHistory.replace('/signup');
		}
	}
	render() {
		if (isLoggedIn) {
			return this.props.children
		} else {
			return null
		}
	}
}


function mapStateToProps(state, ownProps) {
	return {
		isLoggedIn: state.loggedIn,
		currentURL: ownProps.location.pathname
	}
}

export default connect(mapStateToProps)(AuthContainer)
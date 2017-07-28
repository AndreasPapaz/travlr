import React, {Component} from 'react';

export default class Main extends Component {

  render() {
    return(
        <div>
        	{this.props.children}
        </div>
    );
  }
  //  getPageTitle(){
  // 	console.log(this.props.location);
  // 	switch(this.props.location.pathname){
  //     default: 
  // 			return '';
  // 	}
  // }
}


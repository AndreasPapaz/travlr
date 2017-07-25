import React, {Component} from 'react';
import { Image, Header } from 'semantic-ui-react';

export default class Main extends Component {

  render() {
    return(
        <div>
        <Header size='huge'>{this.getPageTitle()}</Header>
        <Image src='/assets/images/travlr_mainpage_large.jpg' fluid />
        	<div id='main'>
        		{this.props.children}
        	</div>
        </div>
    );
  }

  getPageTitle(){
  	console.log(this.props.location);
  	switch(this.props.location.pathname){
  		case '/journal':
  			return 'Journal Entry';
  		default: 
  			return 'TRAVLR';
  	}
  }
}





import React, {Component} from 'react';
import { Image } from 'semantic-ui-react';

export default class Main extends Component {

  render() {
    return(
        <div>
        <Image src='/assets/images/travlr_mainpage_large.jpg' fluid />
        	{this.props.children}
        </div>
    );
  }
}



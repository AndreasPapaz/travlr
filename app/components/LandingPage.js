import React, {Component} from 'react';
import { Image } from 'semantic-ui-react';

export default class Main extends Component {

  render() {
    return(
        <div>
        	{this.props.children}
        </div>
    );
  }
}
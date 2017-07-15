import React, {Component} from 'react';
import { Image } from 'semantic-ui-react';
import FormBox from './FormBox';

export default class Main extends Component {

  render() {
    return(
        <div>
        <Image src='/assets/images/travlr_mainpage_large.jpg' fluid />
        <FormBox />
        </div>
    );
  }
}



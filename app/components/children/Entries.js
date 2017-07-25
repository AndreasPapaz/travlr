import React, {Component} from 'react';
import { Container, Header, Segment, Divider } from 'semantic-ui-react';
import { Link } from 'react-router';

export default class Entries extends Component {

  render() {
    return(
        <div>
        	<Container fluid>
        		<Segment>
	        		<Header as='h2'>Title1</Header>
	        		<p>Today I went to the Water Tower.</p>
	        		<Divider hidden />
	        		<Header as='h2'>Title2</Header>
	        		<p>Today I went to the Buckingham Fountain.</p>
	        		<Divider hidden />
	        		<Header as='h2'>Title3</Header>
	        		<p>Today I went to the Sear's Tower.</p>
	        		<Divider hidden />
	        		<Header as='h2'>Title4</Header>
	        		<p>Today I jogged the Magnificent Mile.</p>
        		</Segment>
        	</Container>
        </div>
    );
  }
}



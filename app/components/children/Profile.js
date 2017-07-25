import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, Checkbox, Form, Icon, List, Card, Image, Grid, Container, Header, Item, Table} from 'semantic-ui-react';
import { Link } from 'react-router';
import axios from 'axios';
import profile from './Profile';

export default class Profile extends Component { 

render() {
    return(
      <div>
          <Item.Group relaxed>
            <Item>
              <Item.Content verticalAlign='left'>
                  <Card floated='left'>
                    <Image src='https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAwCAAAAJGE1ZmQyOTA2LWNhZWEtNGEyYi1iMGZlLTBlZmRjZWI3YTNlNA.jpg' />
                    
                    <Card.Content>
                      <Card.Header>
                        Adrian
                      </Card.Header>
                      
                      <Card.Meta>
                        <span className='date'>
                          Joined in 2017
                        </span>
                      </Card.Meta>
                    
                    <Card.Description>
                        Adrian is a world traveler living in Chicago, IL.
                      </Card.Description>
                    </Card.Content>
                    
                    <Card.Content extra>
                      <a>
                        <Icon name='user' />
                        500+ Friends
                      </a>
                    </Card.Content>

                    <Card.Content extra>
                          <List className='info-section'>
                          <List.Item icon='user' content='Adrian J. Segura' />
                          <List.Item icon='marker' content='Chicago, IL' />
                          <List.Item icon='mail' content={<a href='mailto:adrian@travlr.com'>jadrian@travlr.com</a>} />
                          <List.Item icon='linkify' content={<a href='http://www.github.com/adi727'>Github</a>} />
                        </List>
                    </Card.Content>

                  </Card>
                </Item.Content> 
            </Item>

          </Item.Group>

            <Link to='entries'>
              <Button>View Entries</Button>
           </Link>

      </div>

      );
  }
}




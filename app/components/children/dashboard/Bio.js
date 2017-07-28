import React, {Component} from 'react';
import { Button, Checkbox, Form, Icon, List, Card, Image, Grid, Container, Header, Item, Table} from 'semantic-ui-react';
import { Link } from 'react-router';
import axios from 'axios';

const test = (props) => {
	return(
		<div className="centerProf">
		<h3 className="innerTitle">:) profile</h3>
          <Card>
	            <Image src={props.img} />

	            <Card.Content>
	              <Card.Header>
	                {props.name}
	              </Card.Header>

	              <Card.Meta>
	                <span className='date'>
	                  D.O.B. {props.birthday}
	                </span>
	              </Card.Meta>

	            <Card.Description>
	                {props.name}...is a world traveler and just Awesome!
	              </Card.Description>
	            </Card.Content>


	            <Card.Content extra>
	                  <List className='info-section'>
	                  <List.Item icon='user' content={props.name} />
	                  <List.Item icon='mail' content={props.email} />
	                  <List.Item icon='calendar' content={props.birthday} />
	                </List>
	            </Card.Content>

          </Card>
        </div>
    )
}

export default test;
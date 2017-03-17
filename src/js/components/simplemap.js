import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MyGreatPlaceWithHover from './maphover';
import {Col} from 'react-bootstrap'

import users from 'json-loader!../../../users.json';

import {Table} from 'react-bootstrap';

export default class SimpleMap extends Component {

  constructor() {
    super()
    this.onChildClick = this.onChildClick.bind(this)
     this.state = {
            user : {firstName: '', lastName: '' , contact: '' , address: '', description: '' }
        }
  }

  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };

   onChildClick = (key, childProps) => {
     this.setState({user: {firstName: childProps.firstName , lastName: childProps.lastName, contact:childProps.phone , address: childProps.address , description: childProps.description} })
  }

  mapPositions() {
     let namesList = users.users.map(function(user, i){
          return <MyGreatPlaceWithHover key={i}  lat={user.lat}
          lng={user.lon} text={user.firstName} firstName= {user.firstName} lastName={user.lastName} phone={user.phone} address={user.address} description={user.description} />
        })
    return namesList
  }


  render() {

    return (
        <div>
        <Col xs={12} sm={8}>
        <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom} onChildClick={this.onChildClick}>

        {this.mapPositions()} 
        
      </GoogleMapReact>
        </Col>
        <Col xs={12} sm={4}> 
          { this.state.user.firstName? <Table responsive className="tabler">
            <tbody>
              <tr> 
                  <td> First Name </td>
                  <td> {this.state.user.firstName} </td>
              </tr>
              <tr> 
                  <td> Last Name </td>
                  <td> {this.state.user.lastName} </td>
              </tr>
              <tr> 
                  <td> Phone </td>
                  <td> {this.state.user.contact} </td>
              </tr>
              <tr> 
                  <td> Address </td>
                  <td> {this.state.user.address} </td>
              </tr>
              <tr> 
                  <td> Problem description </td>
                  <td> {this.state.user.description} </td>
              </tr>
            </tbody>
          </Table> : null }
            
        </Col>
        </div>
      
    );
  }
}
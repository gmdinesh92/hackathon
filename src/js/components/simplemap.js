import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MyGreatPlaceWithHover from './maphover';
import {Col,Row} from 'react-bootstrap'

import users from 'json-loader!../../../users.json';
import requests from 'json-loader!../../../requests.json';

import {Table,Jumbotron} from 'react-bootstrap';

export default class SimpleMap extends Component {

  constructor() {
    super()
    this.onChildClick = this.onChildClick.bind(this)
    this.totalclicked = this.totalclicked.bind(this)
    this.sosClicked = this.sosClicked.bind(this)
    this.unresolvedClicked = this.unresolvedClicked.bind(this)
     this.state = {
            user : {firstName: '', lastName: '' , contact: '' , address: '', description: ''  },
            nameList:[],
            mapPositions: ''
        }
  }

  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };

  

   onChildClick = (key, childProps) => {
     this.setState({user: {firstName: childProps.firstName , lastName: childProps.lastName, contact:childProps.phone , address: childProps.address , description: childProps.description} })
  }

  googleMapPositions(users) {
     let namesList = users.map(function(user, i){
          return <MyGreatPlaceWithHover key={i}  lat={user.owner.lat}
          lng={user.owner.lon} text={user.owner.firstName} firstName= {user.owner.firstName} lastName={user.owner.lastName} phone={user.owner.phone} address={user.owner.address} description={user.owner.description} />
        })
    return namesList
  }

  totalclicked() {
    this.setState({nameList: requests.requests.total , mapPositions: this.googleMapPositions(requests.requests.total) })
  }

  sosClicked() {
    this.setState({nameList: requests.requests.sos, mapPositions: this.googleMapPositions(requests.requests.sos) })
  }

  unresolvedClicked() {
    this.setState({nameList: requests.requests.unresolved, mapPositions: this.googleMapPositions(requests.requests.unresolved) })
  }

  render() {
    const requestStyle = {
      textAlign:'center',
      cursor:"pointer",
    }

    return (
        <div>
          <Row style={requestStyle}>
            <Col xs={12} sm={3}> 
               <Jumbotron onClick={this.totalclicked}>
                 <h3> Total ({requests.requests.total.length}) </h3>
               </Jumbotron>
            </Col>
            <Col xs={12} sm={3}> 
               <Jumbotron onClick={this.sosClicked}>
                 <h3> SOS ({requests.requests.sos.length}) </h3>
               </Jumbotron>
            </Col>  
            <Col xs={12} sm={3}> 
               <Jumbotron onClick={this.unresolvedClicked}>
                 <h3> Unresolved ({requests.requests.unresolved.length}) </h3>
               </Jumbotron>
            </Col>  
            <Col xs={12} sm={3}> 
               <Jumbotron>
                 <h3> Teams</h3>
               </Jumbotron>
            </Col>              
          </Row>
        
        <Col xs={12} sm={8}>
          
          {this.state.nameList.length>0?<GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom} onChildClick={this.onChildClick}>
          
          {this.state.mapPositions}

          </GoogleMapReact>: null}
        
        </Col>

        <Col xs={12} sm={4}> 
          { this.state.user.firstName? <Table responsive bordered hover striped>
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
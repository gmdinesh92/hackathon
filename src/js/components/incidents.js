import React from 'react';
import ReactDOM from 'react-dom';

import NavigationBar from './navigationbar'
import CallQueue from './call_queue'
import {Col,Button} from 'react-bootstrap'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import SimpleMap from './simplemap'


class Incidents extends React.Component {

  constructor() {
    super()
  }

  goBackClicked() {
     window.location.href = '#/'
  }

    render() {
      const mapStyle = {
        marginBottom: '10rem',
        height: '50rem',
      };

      const backStyle = {
        marginTop: '2rem'
      }
        return (
            <div>
              <NavigationBar/>
              <div className="container" style={backStyle}>
                <Button bsStyle="default" bsSize="small" onClick={this.goBackClicked}> {'< Go Back'}</Button>
              </div>
               
              <CallQueue/>
              <div className="container">
                <h3> Requests Status </h3>
                <iframe width="100%" height="720px" frameBorder="0" scrolling="no" src="http://localhost:3333/map.html"/>
              </div>
              <div className="container" style={mapStyle}>
                 <Col xs={12} md={12}>
                  <SimpleMap />
                 </Col>
              </div>
            </div>
        );
    }
}

export default Incidents
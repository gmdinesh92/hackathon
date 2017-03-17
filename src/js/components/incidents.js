import React from 'react';
import ReactDOM from 'react-dom';

import NavigationBar from './navigationbar'
import CallQueue from './call_queue'
import {Col} from 'react-bootstrap'

import SimpleMap from './simplemap'


class Incidents extends React.Component {
    render() {
      const mapStyle = {
        marginBottom: '10rem',
        height: '50rem',
      };
        return (
            <div>
              <NavigationBar/>
              <CallQueue/>
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
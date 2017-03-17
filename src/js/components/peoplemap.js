import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MyGreatPlaceWithHover from './maphover';

export default class SimpleMap extends Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <MyGreatPlaceWithHover  lat={59.975413}
          lng={30.377844} text={'Dinesh'}/>

          <MyGreatPlaceWithHover  lat={59.955426}
          lng={30.327844} text={'Sam'}/>

          <MyGreatPlaceWithHover  lat={59.935411}
          lng={30.347870} text={'Parvathi'}/>
          

      </GoogleMapReact>
    );
  }
}
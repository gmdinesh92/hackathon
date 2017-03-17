import React from 'react';
import ReactDOM from 'react-dom';

import NavigationBar from './components/navigationbar'
import CallQueue from './components/call_queue'
import ItemCard from './components/itemcard'
import {Col} from 'react-bootstrap'

import SimpleMap from './components/simplemap'


class HomePage extends React.Component {
    render() {
      const cardStyle = {
        marginTop: '10rem',
      };

      const mapStyle = {
        marginTop: '10rem',
        marginBottom: '10rem',
        height: '50rem',
      };
        return (
            <div>
              <NavigationBar/>
              
              <div className="cards container" style={cardStyle}>
                <Col xs={12} md={4}>
                  <ItemCard title='Snow Strom' subtitle='New york on 27th Oct 2016' content='In New York City, the arrival of a major snowstorm a challenge for state and city officials.Schools were closed. Aboveground subway service was shut down. Snow plows were plentiful. Many New Yorkers were stuck at home or had difficulty commuting, but there was no fiery criticism about stranded trains or unmanageable piles of snow as there had been in past storms.' image="src/images/snow.png"/>
                </Col>
                <Col xs={12} md={4}>
                  <ItemCard title='Sea Islands Hurricane' subtitle='Georgia on 13th Aug 2016' content='Georgia, was hit by a devastating storm that killed approximately 2,000 people.On August 15, 1893, a tropical storm formed east of Cape Verde. It likely passed directly through the islands on the 16th, leaving their vicinity during the evening of the 17th. It became a hurricane on the 19th, while crossing the Atlantic between the Cape Verde Islands and the Lesser Antilles. ' image="src/images/huricane.jpg"/>
                </Col>
                <Col xs={12} md={4}>
                  <ItemCard title='The Johnstown Flood' subtitle='Pennsylvania on 9th Feb 2016' content='Johnstown experienced major flooding that reached 17 feet on the Franklin street bridge. On March 14, 1907, there was flooding that was bested only by the one in 1898. There was talk of flood control but nothing was accomplished. Talks had finally determined that something needed to be done and the legislature was working on a bill by 1935.' image="src/images/flood.jpg"/>
                </Col>
              </div>
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

ReactDOM.render(<HomePage/>, document.getElementById('app'));

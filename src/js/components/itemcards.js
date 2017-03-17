import React from 'react';
import {Carousel} from 'react-bootstrap';
import ItemCard from './itemcard';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Col} from 'react-bootstrap'

class ItemCards extends React.Component {
    render() {
           const margin = { "marginTop" : "10rem" };
        return (
            <div>
                {this.props.card.map(function (object, i) {
                    return <Col xs={12} md={6} key={i}> 
                            <div style={margin}><ItemCard card={object} /> 
                            </div> 
                           </Col>;
                    })}
                 <MuiThemeProvider>
                    <Divider/>
                 </MuiThemeProvider>
            </div>
        );
    }
}

export default ItemCards
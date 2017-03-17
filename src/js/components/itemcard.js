import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {ResponsiveEmbed} from 'react-bootstrap';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class ItemCard extends React.Component {
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <Card>
                        <CardMedia overlay={this.props.overlay}>
                            <img src={this.props.image} height="240"/>
                        </CardMedia>
                        <CardTitle title={this.props.title} subtitle={this.props.subtitle}/>
                        <CardText>
                            {this.props.content}
                        </CardText>
                        <CardActions>
                            <FlatButton label="View incident" />
                        </CardActions>
                    </Card>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default ItemCard

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
                        <CardMedia>
                            <ResponsiveEmbed a16by9>
                                <iframe src={this.props.card.video} allowFullScreen={true}></iframe>
                            </ResponsiveEmbed>
                        </CardMedia>
                        <CardTitle title={this.props.card.title} subtitle={this.props.card.subtitle}/>
                        <CardText>
                            {this.props.card.content}       
                        </CardText>
                    </Card>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default ItemCard
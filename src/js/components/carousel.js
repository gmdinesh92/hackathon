import React from 'react';
import {Carousel} from 'react-bootstrap';

class HomeCarousel extends React.Component {
    render() {
        return (
            <div>
                <Carousel>
                    {this.props.content.map(function (object, i) {
                        return <Carousel.Item key={i}>
                                    <img src={object.image_source}/>
                                    <Carousel.Caption>
                                        <h1>{object.title}</h1>
                                        <p>{object.description}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>;
                        })}
                </Carousel>
            </div>
        );
    }
}

export default HomeCarousel
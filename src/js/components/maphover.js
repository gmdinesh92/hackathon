import React,{ Component } from 'react';


import {greatPlaceStyle, greatPlaceStyleHover} from './hover_styles.js';

export default class MyGreatPlaceWithHover extends Component {

  static defaultProps = {};

  constructor(props) {
    super(props);
  }

  render() {
    const style = this.props.$hover ? greatPlaceStyleHover : greatPlaceStyle;

    return (
       <div style={style}>
          {this.props.text}
       </div>
    );
  }
}
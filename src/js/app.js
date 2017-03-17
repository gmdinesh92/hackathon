import React from 'react';
import ReactDOM from 'react-dom';

import NavigationBar from './components/navigationbar'
import HomeCarousel from './components/carousel'
import ItemCards from './components/itemcards'


class HomePage extends React.Component {
    render() {
        return (
            <div>
              <NavigationBar/>

            </div>
        );
    }
}

ReactDOM.render(<HomePage/>, document.getElementById('app'));

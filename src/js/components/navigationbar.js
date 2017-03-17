import React from 'react';
import {Navbar, Nav, NavItem, MenuItem} from 'react-bootstrap';

class NavigationBar extends React.Component {
    render() {
        const getStyle  = { "marginBottom" : 0 }
        return (
            <div>
                <Navbar style={getStyle} collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Nationstar Community</a>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                      <Nav pullRight>
                        <NavItem eventKey={1} href="#" >Home</NavItem>
                        <NavItem eventKey={1} href="#/account">My Account</NavItem>
                        <NavItem eventKey={1} href="#">Logout </NavItem>
                      </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavigationBar

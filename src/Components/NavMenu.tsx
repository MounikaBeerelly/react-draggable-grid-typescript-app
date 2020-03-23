import React, { Component } from 'react';
import './NavMenu.css';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

class NavMenu extends Component {
     render() {
         return (
            <header>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow" dark>
                <NavbarBrand tag={Link} to="/"> <img className="user-logo" src="http://lofrev.net/wp-content/photos/2017/05/user_logo.png" alt="logo" height="40" /></NavbarBrand>
                    <ul className="navbar-nav flex-grow">
                        <NavItem >
                            <NavLink tag={Link} className="text-light" to="/" ><Icon iconName="Ringer" /></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-light d-flex " to=""><p className="mb-0 mr-2"></p> <Icon iconName="Contact" /></NavLink>
                        </NavItem>
                    </ul>
            </Navbar>
        </header>
         )
     }
}
export default NavMenu;
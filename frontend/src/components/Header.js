import React from 'react';
import { Navbar, Nav,  Container} from 'react-bootstrap';
import {NavLink , Link} from 'react-router-dom';


 
const Header = () => {
    return (
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container >
                <Link to='/' className="navbar-brand">Admin Panel</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                 <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
      
      {/*<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
  </NavDropdown>*/}
                  </Nav>
                  <Nav >
                  <NavLink className='nav-link' to="/register">Sign Up</NavLink>
                  </Nav>
                  <Nav>
                  <NavLink className='nav-link' to="/login">Sign In</NavLink>
                  </Nav>
                </Navbar.Collapse>
            </Container>
          </Navbar>
    )
}

export default Header
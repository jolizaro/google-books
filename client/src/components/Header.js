import React from 'react'
import { Navbar, Nav, Button, Form, FormControl, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';


const Header = () => {
 
  return (
    <header>
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
      
      <LinkContainer to="/">
        <Navbar.Brand>Google Books Finder</Navbar.Brand>
      </LinkContainer>
      <div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
   
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Search</Nav.Link>
          </LinkContainer>
           <LinkContainer to="/saved">
            <Nav.Link>Saved</Nav.Link>
          </LinkContainer>
          
          
        </Nav>
     
      </Navbar.Collapse>
      </div>
    </Container>
    </Navbar>
    </header>
  )
}

export default Header

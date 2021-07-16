import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';


const Header = () => {
 
  return (
    <header>
    <Navbar bg="primary" variant="dark" expand="lg" className="p-3">
      
      <LinkContainer to="/">
        <Navbar.Brand style={{fontSize: '30px'}}>Google Books Finder</Navbar.Brand>
      </LinkContainer>
      <div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
   
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link className="header-links">Search</Nav.Link>
          </LinkContainer>
           <LinkContainer to="/saved">
            <Nav.Link className="header-links">Saved</Nav.Link>
          </LinkContainer>
          
          
        </Nav>
     
      </Navbar.Collapse>
      </div>
  
    </Navbar>
    </header>
  )
}

export default Header

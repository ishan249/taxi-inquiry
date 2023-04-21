import React from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';  

function Navigation() {
  return (
    <Navbar className='font-AlbertSans' style={{backgroundColor:"#0a2351"}} expand="lg">
    <Container>
      <Navbar.Brand style={{fontSize:"24px", color:"white"}} href="#home">Taxi Inquiry</Navbar.Brand>
      <Navbar.Toggle  style={{ color: "white", border: "white" }} aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link  style={{paddingTop:"10px",color:"#cfcfcf"}} href="#home">Home</Nav.Link>
          <Nav.Link  style={{paddingTop:"10px",color:"#cfcfcf"}} href="#blog">Blog</Nav.Link>
          <Nav.Link style={{paddingTop:"10px",color:"#cfcfcf"}} href="#contact">Contact</Nav.Link>
          <Nav.Link  style={{paddingTop:"10px",color:"#cfcfcf"}} href="#help">Help</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navigation;

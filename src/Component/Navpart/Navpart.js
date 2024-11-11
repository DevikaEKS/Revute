// Navpart.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
 // Import Link from react-scroll
import "./Navpart.css";

function Navpart() {
  return (
    <Navbar bg="light" variant="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand  to="/" className='rvt'>
          Revute
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <ScrollLink  to="/" className='navtxt mx-1 nav-link'>
              Home
            </ScrollLink>
          
            <ScrollLink to="services" smooth={true} 
              duration={500} className='navtxt mx-1 nav-link'>
              Services
            </ScrollLink>
            {/* Use ScrollLink for scrolling to section */}
            <ScrollLink 
              to="roles" 
              smooth={true} 
              duration={500} 
              className="navtxt mx-1 nav-link"
            >
              Our Roles
            </ScrollLink>
            <ScrollLink  to="contact" smooth={true} 
              duration={500} className='navtxt mx-1 nav-link'>
              Contact
            </ScrollLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navpart;

//import { Navbar, Container, Nav } from "react-bootstrap";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary sticky-top">
        <Container>
          <Link to="/" className='navbar-brand'>Prašina</Link>
          <Navbar.Toggle aria-controls="navbar"></Navbar.Toggle>
          <Navbar.Collapse id="navbar">
            <Nav className="me-auto">
              <Link to="/" className='nav-link'>Domov</Link>
              <Link to="/setting" className='nav-link'>Prašina</Link>
              <Link to="/story" className='nav-link'>Děj</Link>
              <Link to="/characters" className='nav-link'>Postavy</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation;
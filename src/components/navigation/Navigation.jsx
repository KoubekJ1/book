//import { Navbar, Container, Nav } from "react-bootstrap";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import transitionSound from 'assets/audio/transition.opus';
import ambianceSound from 'assets/audio/ambiance.opus'

import { Link } from "react-router-dom";
import { useEffect } from 'react';



function Navigation() {
  const ambiance = new Audio(ambianceSound);
  ambiance.play();

  const transitionEffect = useEffect(() => {
    const transition = new Audio(transitionSound);
    transition.play();
  }, []);

  return (
    <>
      <Navbar expand="lg" className='bg-body-tertiary sticky-top' data-bs-theme="dark">
        <Container>
          <Link to="/" className='navbar-brand'>Prašina</Link>
          <Navbar.Toggle aria-controls="navbar"></Navbar.Toggle>
          <Navbar.Collapse id="navbar">
            <Nav className="me-auto">
              <Link to="/" className='nav-link'>Domov</Link>
              <Link to="/setting" className='nav-link'>Prašina</Link>
              <Link to="/story" className='nav-link'>Děj</Link>
              <Link to="/characters" className='nav-link'>Postavy</Link>
              <Link to="/theater" className='nav-link'>Divadlo</Link>
              <Link to="/about" className='nav-link'>O stránce</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation;
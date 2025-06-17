//import { Navbar, Container, Nav } from "react-bootstrap";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import transitionSound from 'assets/audio/transition.opus';

import { Link } from "react-router-dom";
import { useEffect, useRef } from 'react';

function Navigation(props) {
  if (props.hide) return (<></>);

  const transitionRef = useRef(null);
  useEffect(() => {

  }, []);

  return (
    <>
      <audio ref={transitionRef} src={transitionSound} autoPlay></audio>
      <Navbar expand="lg" className='bg-body-tertiary sticky-top' data-bs-theme="dark">
        <Container>
          <Navbar.Toggle aria-controls="navbar"></Navbar.Toggle>
          <Navbar.Collapse id="navbar">
            <Nav className="me-auto">
              <Link to="/home" className='nav-link'>Domov</Link>
              <Link to="/setting" className='nav-link'>O Prašině</Link>
              <Link to="/story" className='nav-link'>Příběh</Link>
              <Link to="/characters" className='nav-link'>Postavy</Link>
              <Link to="/opinion" className='nav-link'>Názor</Link>
              <Link to="/test" className='nav-link'>Test osobnosti</Link>
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
import './Navigation.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import transitionSound from 'assets/audio/transition.opus';

import { Link } from "react-router-dom";
import { useContext, useEffect, useRef } from 'react';
import AudioContext from 'src/AudioContext';

import volumeIcon from 'assets/volwhite.png'

function Navigation(props) {
  if (props.hide) return (<></>);

  const transitionRef = useRef(null);

  const context = useContext(AudioContext);

  const sliderRef = useRef(null);

  const sliderCallback = (e) => {
    const newVolume = e.target.value / 100;
    context.setVolumeCallback(newVolume);
    context.volume = newVolume;
  }

  const transitionPlay = (e) =>
  {
    e.target.volume = context.volume;
  }

  return (

    <>
      <audio onPlay={transitionPlay} ref={transitionRef} src={transitionSound} autoPlay></audio>
      <Navbar expand="lg" className='bg-body-tertiary sticky-top' data-bs-theme="dark">
        <Container>
          <Navbar.Toggle aria-controls="navbar"></Navbar.Toggle>
          <Navbar.Collapse id="navbar">
            <Nav className="me-auto">
              <Link to="/home" className='nav-link top-link'>Domov</Link>
              <Link to="/setting" className='nav-link top-link'>O Prašině</Link>
              <Link to="/story" className='nav-link top-link'>Příběh</Link>
              <Link to="/characters" className='nav-link top-link'>Postavy</Link>
              <Link to="/opinion" className='nav-link top-link'>Názor</Link>
              <Link to="/test" className='nav-link top-link'>Test osobnosti</Link>
              <Link to="/theater" className='nav-link top-link'>Divadlo</Link>
              <Link to="/buy" className='nav-link top-link'>Koupit</Link>
              <Link to="/about" className='nav-link top-link'>O stránce</Link>
            </Nav>
            <div className='volume-container'>
              <label htmlFor="range" className='form-label'><img src={volumeIcon} className='vol-icon vol-icon-margin'></img></label>
              <input type='range' min="0" max="100" defaultValue={context.volume * 100} className='slider vol-margin' id="range" ref={sliderRef} onInput={sliderCallback}></input>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation;
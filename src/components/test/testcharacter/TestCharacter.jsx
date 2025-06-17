import { Card } from 'react-bootstrap';
import './TestCharacter.css';
import { Button, Modal, Image } from 'react-bootstrap';
import { useState } from 'react';

function TestCharacter(props) {
  return (
    <>
      <div className='imgcontainer'>
        <img src={props.character.img} className='imgcircle'></img>
        <h5 className='text-center card-title my-2'>{props.character.name}</h5>
        <p className='text-center card-text'>{props.character.brief}</p>
      </div>
    </>
  )
}

export default TestCharacter;
import { Card } from 'react-bootstrap';
import './Character.css';
import { Button, Modal, Image } from 'react-bootstrap';
import { useState } from 'react';

function Character(props) {
  const [show, setShow] = useState(false);
  const disable = () => setShow(false);

  return (
    <>
      <div className='imgcontainer'>
        <img src={props.character.img} className='imgcircle' onClick={setShow}></img>
        <h5 className='text-center card-title my-2'>{props.character.name}</h5>
        <p className='text-center card-text'>{props.character.brief}</p>
      </div>

      <Modal show={show} onHide={disable} data-bs-theme="dark">
        <Modal.Header closeButton>
          <Modal.Title>{props.character.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{props.character.brief}</p>
          <p>{props.character.extra}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={disable}>Zpět</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Character;
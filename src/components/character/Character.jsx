import { Card } from 'react-bootstrap';
import './Character.css';
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';

function Character(props)
{
  const [show, setShow] = useState(false);
  const enable = () => setShow(true);
  const disable = () => setShow(false);

  return (
    <>
      <Card style={{width: '18rem'}}>
        <Card.Img variant='top' src={props.character.img}/>
        <Card.Body>
          <Card.Title>{props.character.name}</Card.Title>
          <Card.Text>{props.character.brief}</Card.Text>
          <Button variant="primary" onClick={enable}>Více informací</Button>

          <Modal show={show}>
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
        </Card.Body>
      </Card>
    </>
  )
}

export default Character;
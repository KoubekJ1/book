import Navigation from 'src/components/navigation/Navigation';
import './AboutPage.css';

import bg from 'assets/2.jpg';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useRef, useState } from 'react';

const style = {
  backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(" + bg + ")"
}

function validateName(name) {
  return name.trim().split(" ").length == 2
}

function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

function validateMessage(message) {
  return typeof (message) === "string" && message.length > 0;
}

function AboutPage() {

  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    let passed = true;

    if (!validateName(name) || !validateEmail(email) || !validateMessage(message)) passed = false;

    if (!passed) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    //setValidated(false);
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  }

  return (
    <>
      <Navigation />
      <Container fluid className='anim background-long' style={style}>
        <Row>
          <Col>
            <div className='about-col'>
              <h1>O stránce</h1>
              <p>Fanouškovská webová stránka věnována knize "Prašina" od Vojtěcha Matochy. Stránka byla vytvořená v rámci školního projektu.</p>
              <div>Jan Koubek 2025</div>
              <div>Email: <a href='mailto:koubek@spsejecna.cz'>koubek@spsejecna.cz</a></div>
              <div>Telefon: +420 773 033 843</div>

              <h2 className='mt-5'>Zdroje</h2>
              <h3>Obrázky</h3>
              <div>Ilustrace knihy Karla Osohy</div>
              <div>Divadlo: <a href='https://www.klicperovodivadlo.cz/inscenace/prasina-1-8478/'>Klicperovo divadlo</a></div>
              <h3>Zvuky</h3>
              <div>Ambience: <a href='https://www.youtube.com/watch?v=RVlHfWimIfk'>https://www.youtube.com/watch?v=RVlHfWimIfk</a></div>
              <div>Přechod mezi stránkami: <a href='https://www.youtube.com/watch?v=kJwRJ7--wLk'>https://www.youtube.com/watch?v=kJwRJ7--wLk</a></div>
            </div>
          </Col>
          <Col>
            <div className='about-col mt-5'>
              <h1>Odezva</h1>
              <p>Rád bych Vás požádal o zpětnou vazbu na Váš dojem z webové stránky. Uvítám jakoukoli konstruktivní kritiku i názor.</p>
              <Form noValidate onSubmit={handleSubmit} data-bs-theme="dark">
                <Form.Group className='mb-3' controlId='formName'>
                  <Form.Label>Jméno a příjmení</Form.Label>
                  <Form.Control isValid={validated && validateName(name)} isInvalid={validated && !validateName(name)} name='name' type='text' placeholder='Ladislav Novák' onChange={handleNameChange} required></Form.Control>
                  <Form.Control.Feedback type='invalid'>Zadejte jméno a příjmení!</Form.Control.Feedback>
                  <Form.Text className='text-muted'>Vaše informace nejsou pro ostatní uživatele nijak viditelné.</Form.Text>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formEmail'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control isValid={validated && validateEmail(email)} isInvalid={validated && !validateEmail(email)} name='email' type='email' placeholder='priklad@priklad.cz' onChange={handleEmailChange} required></Form.Control>
                  <Form.Control.Feedback type='invalid'>Zadejte správný email!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formMessage'>
                  <Form.Label>Zpráva</Form.Label>
                  <Form.Control isValid={validated && validateMessage(message)} isInvalid={validated && !validateMessage(message)} name='message' type='text' placeholder='Líbí/Nelíbí se mi...' onChange={handleMessageChange} required></Form.Control>
                  <Form.Control.Feedback type='invalid'>Zadejte zprávu!</Form.Control.Feedback>
                </Form.Group>
                <Button variant='secondary' type='submit' className='mb-2 send-button'>Odeslat</Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AboutPage;